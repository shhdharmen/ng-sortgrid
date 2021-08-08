import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { last, takeLast, takeUntil, takeWhile, throttleTime } from 'rxjs/operators';
import { SELECTED_DEFAULT_CLASS } from './helpers/class/ngsg-class.service';

import { NgsgElementsHelper } from './helpers/element/ngsg-elements.helper';
import { ScrollHelperService } from './helpers/scroll/scroll-helper.service';
import { NgsgSelectionService } from './mutliselect/ngsg-selection.service';
import { NgsgEventsService } from './shared/ngsg-events.service';
import { NgsgOrderChange } from './shared/ngsg-order-change.model';
import { NgsgReflectService } from './sort/reflection/ngsg-reflect.service';
import { NgsgSortService } from './sort/sort/ngsg-sort.service';
import { NgsgStoreService } from './store/ngsg-store.service';

const selector = '[ngSortgridItem]';

@Directive({ selector })
export class NgsgItemDirective implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() ngSortGridGroup = 'defaultGroup';
  @Input() ngSortGridItems: any[];
  @Input() scrollPointTop: number;
  @Input() scrollPointBottom: number;
  @Input() scrollSpeed: number;
  @Input() autoScroll = false;
  @Input() isSelected = false;

  @Output() sorted = new EventEmitter<NgsgOrderChange<any>>();
  @Output() itemSelected = new EventEmitter<boolean>();

  private selected = false;
  private destroy$ = new Subject();

  constructor(
    public el: ElementRef,
    private sortService: NgsgSortService,
    private selectionService: NgsgSelectionService,
    private reflectService: NgsgReflectService,
    private ngsgStore: NgsgStoreService,
    private ngsgEventService: NgsgEventsService,
    private scrollHelperService: ScrollHelperService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.ngsgEventService.dropped$.pipe(takeUntil(this.destroy$)).subscribe(() => (this.selected = false));

    fromEvent<DragEvent>(this.el.nativeElement, 'drag')
      .pipe(
        throttleTime(20),
        takeUntil(this.destroy$),
        takeWhile(() => this.autoScroll)
      )
      .subscribe(() => {
        this.scrollHelperService.scrollIfNecessary(
          event,
          {
            top: this.scrollPointTop,
            bottom: this.scrollPointBottom,
          },
          this.scrollSpeed
        );
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const sortGridItemChanges = changes.ngSortGridItems;
    const sortGridItems = sortGridItemChanges.currentValue ? sortGridItemChanges.currentValue : [];

    if (!this.ngsgStore.hasGroup(this.ngSortGridGroup)) {
      this.ngsgStore.initState(this.ngSortGridGroup, sortGridItems);
      return;
    }
    this.ngsgStore.setItems(this.ngSortGridGroup, sortGridItems);
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.draggable = true;
    this.selected = this.isSelected;
    if (this.selected) {
      this.selectionService.addSelectedItem(this.ngSortGridGroup, this.el.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  @HostListener('dragstart', ['$event'])
  dragStart(event): void {
    if (!this.occuredOnHost(event)) {
      return;
    }
    this.selectionService.selectElementIfNoSelection(this.ngSortGridGroup, event.target);
    this.sortService.initSort(this.ngSortGridGroup);
  }

  @HostListener('dragenter')
  dragEnter(): void {
    if (!this.ngsgStore.hasSelectedItems(this.ngSortGridGroup)) {
      return;
    }
    this.sortService.sort(this.el.nativeElement);
  }

  @HostListener('dragover', ['$event'])
  dragOver(event): boolean {
    if (event.preventDefault) {
      // Necessary. Allows us to drop.
      event.preventDefault();
    }
    return false;
  }

  @HostListener('dragend')
  drop(): void {
    if (!this.ngsgStore.hasSelectedItems(this.ngSortGridGroup)) {
      return;
    }

    if (!this.ngsgStore.hasItems(this.ngSortGridGroup)) {
      console.warn(`Ng-sortgrid: No items provided - please use [sortGridItems] to pass in an array of items -
      otherwhise the ordered items can not be emitted in the (sorted) event`);
      return;
    }
    const previousOrder = [...this.ngsgStore.getItems(this.ngSortGridGroup)];
    this.sortService.endSort();
    const currentOrder = this.reflectService.reflectChanges(this.ngSortGridGroup, this.el.nativeElement);
    this.sorted.next({ previousOrder, currentOrder });
    this.ngsgStore.resetSelectedItems(this.ngSortGridGroup);
    this.ngsgEventService.dropped$.next();
  }

  @HostListener('click')
  clicked(): void {
    this.selected = !this.isItemCurrentlySelected();
    this.selectionService.updateSelectedDragItem(this.ngSortGridGroup, this.el.nativeElement, this.selected);
    this.itemSelected.emit(this.isMultiSelected);
  }

  private get isMultiSelected(): boolean {
    return this.el.nativeElement.classList?.contains(SELECTED_DEFAULT_CLASS);
  }

  private isItemCurrentlySelected(): boolean {
    const index = NgsgElementsHelper.findIndex(this.el.nativeElement);
    return !!this.ngsgStore.getSelectedItems(this.ngSortGridGroup).find((element) => element.originalIndex === index);
  }

  private occuredOnHost(event): boolean {
    return event.target.matches(selector);
  }
}
