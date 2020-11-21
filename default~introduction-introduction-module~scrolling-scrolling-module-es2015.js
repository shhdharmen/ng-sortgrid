(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~introduction-introduction-module~scrolling-scrolling-module"],{

/***/ "../ng-sortgrid/src/lib/helpers/class/ngsg-class.service.ts":
/*!******************************************************************!*\
  !*** ../ng-sortgrid/src/lib/helpers/class/ngsg-class.service.ts ***!
  \******************************************************************/
/*! exports provided: NgsgClassService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsgClassService", function() { return NgsgClassService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NgsgClassService {
    constructor() {
        this.SELECTED_DEFAULT_CLASS = 'ng-sg-selected';
        this.PLACEHOLDER_DEFAULT_CLASS = 'ng-sg-placeholder';
        this.DROPPED_DEFAULT_CLASS = 'ng-sg-dropped';
    }
    addPlaceHolderClass(element) {
        element.classList.add(this.PLACEHOLDER_DEFAULT_CLASS);
    }
    removePlaceHolderClass(element) {
        element.classList.remove(this.PLACEHOLDER_DEFAULT_CLASS);
    }
    addDroppedClass(element) {
        element.classList.add(this.DROPPED_DEFAULT_CLASS);
    }
    removeDroppedClass(element) {
        element.classList.remove(this.DROPPED_DEFAULT_CLASS);
    }
    addSelectedClass(element) {
        element.classList.add(this.SELECTED_DEFAULT_CLASS);
    }
    removeSelectedClass(element) {
        element.classList.remove(this.SELECTED_DEFAULT_CLASS);
    }
}
NgsgClassService.ɵfac = function NgsgClassService_Factory(t) { return new (t || NgsgClassService)(); };
NgsgClassService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgsgClassService, factory: NgsgClassService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgsgClassService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "../ng-sortgrid/src/lib/helpers/element/ngsg-elements.helper.ts":
/*!**********************************************************************!*\
  !*** ../ng-sortgrid/src/lib/helpers/element/ngsg-elements.helper.ts ***!
  \**********************************************************************/
/*! exports provided: NgsgElementsHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsgElementsHelper", function() { return NgsgElementsHelper; });
class NgsgElementsHelper {
    static findIndex(element) {
        const allElements = element.parentNode.children;
        return Array.prototype.indexOf.call(allElements, element);
    }
}


/***/ }),

/***/ "../ng-sortgrid/src/lib/helpers/scroll/scroll-helper.service.ts":
/*!**********************************************************************!*\
  !*** ../ng-sortgrid/src/lib/helpers/scroll/scroll-helper.service.ts ***!
  \**********************************************************************/
/*! exports provided: ScrollHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollHelperService", function() { return ScrollHelperService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class ScrollHelperService {
    constructor(document) {
        this.document = document;
        this.DEFAULT_SCROLLSPEED = 50;
        this.SCROLL_BUFFER = 50;
        this.window = document.defaultView;
    }
    scrollIfNecessary(event, scrollPoints = {}, scrollSpeed) {
        const currentPosition = event.pageY - this.window.scrollY;
        if (this.isTopScrollNeeded(currentPosition, scrollPoints.top)) {
            this.window.scrollBy({ top: -scrollSpeed || -this.DEFAULT_SCROLLSPEED, behavior: 'smooth' });
            return;
        }
        if (this.isBottomScrollNeeded(currentPosition, scrollPoints.bottom)) {
            this.window.scrollBy({ top: scrollSpeed || this.DEFAULT_SCROLLSPEED, behavior: 'smooth' });
        }
    }
    isTopScrollNeeded(currentPosition, scrollPointTop) {
        return scrollPointTop ? currentPosition < scrollPointTop :
            currentPosition < this.SCROLL_BUFFER;
    }
    isBottomScrollNeeded(currentPosition, scrollPointBottom) {
        return scrollPointBottom ? currentPosition > scrollPointBottom :
            currentPosition > this.window.innerHeight - this.SCROLL_BUFFER;
    }
}
ScrollHelperService.ɵfac = function ScrollHelperService_Factory(t) { return new (t || ScrollHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
ScrollHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ScrollHelperService, factory: ScrollHelperService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "../ng-sortgrid/src/lib/mutliselect/ngsg-selection.service.ts":
/*!********************************************************************!*\
  !*** ../ng-sortgrid/src/lib/mutliselect/ngsg-selection.service.ts ***!
  \********************************************************************/
/*! exports provided: NgsgSelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsgSelectionService", function() { return NgsgSelectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _helpers_class_ngsg_class_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/class/ngsg-class.service */ "../ng-sortgrid/src/lib/helpers/class/ngsg-class.service.ts");
/* harmony import */ var _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/element/ngsg-elements.helper */ "../ng-sortgrid/src/lib/helpers/element/ngsg-elements.helper.ts");
/* harmony import */ var _store_ngsg_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/ngsg-store.service */ "../ng-sortgrid/src/lib/store/ngsg-store.service.ts");









var ChangeAction;
(function (ChangeAction) {
    ChangeAction[ChangeAction["ADD"] = 0] = "ADD";
    ChangeAction[ChangeAction["REMOVE"] = 1] = "REMOVE";
})(ChangeAction || (ChangeAction = {}));
class NgsgSelectionService {
    constructor(classService, ngsgStore) {
        this.classService = classService;
        this.ngsgStore = ngsgStore;
        this.COMMAND_KEY = 'Meta';
        this.CONTROL_KEY = 'Control';
        this.selectionChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        const selectionKeyPressed$ = this.selectionKeyPressed();
        this.selectionChange$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(selectionKeyPressed$))
            .subscribe(([selectionChange, selectionKeyPressed]) => {
            selectionKeyPressed
                ? this.handleSelectionChange(selectionChange)
                : this.resetSelectedItems(selectionChange.key);
        });
    }
    resetSelectedItems(group) {
        this.ngsgStore.getSelectedItems(group).forEach(item => this.classService.removeSelectedClass(item.node));
        this.ngsgStore.resetSelectedItems(group);
    }
    handleSelectionChange(selectionChange) {
        if (selectionChange.action === ChangeAction.ADD) {
            this.classService.addSelectedClass(selectionChange.item);
            this.ngsgStore.addSelectedItem(selectionChange.key, {
                node: selectionChange.item,
                originalIndex: _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_4__["NgsgElementsHelper"].findIndex(selectionChange.item)
            });
        }
        if (selectionChange.action === ChangeAction.REMOVE) {
            this.classService.removeSelectedClass(selectionChange.item);
            this.ngsgStore.removeSelectedItem(selectionChange.key, selectionChange.item);
        }
    }
    selectionKeyPressed() {
        const selectionKeyPressed = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((keyboardEvent) => keyboardEvent.key === this.COMMAND_KEY || keyboardEvent.key === this.CONTROL_KEY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(true));
        const keyup = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(false));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(selectionKeyPressed, keyup);
    }
    selectElementIfNoSelection(group, dragedElement) {
        if (this.ngsgStore.hasSelectedItems(group)) {
            return;
        }
        this.ngsgStore.addSelectedItem(group, {
            node: dragedElement,
            originalIndex: _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_4__["NgsgElementsHelper"].findIndex(dragedElement)
        });
    }
    updateSelectedDragItem(key, item, selected) {
        this.selectionChange$.next({
            key,
            item,
            action: selected ? ChangeAction.ADD : ChangeAction.REMOVE
        });
    }
}
NgsgSelectionService.ɵfac = function NgsgSelectionService_Factory(t) { return new (t || NgsgSelectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_helpers_class_ngsg_class_service__WEBPACK_IMPORTED_MODULE_3__["NgsgClassService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_store_ngsg_store_service__WEBPACK_IMPORTED_MODULE_5__["NgsgStoreService"])); };
NgsgSelectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgsgSelectionService, factory: NgsgSelectionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgsgSelectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _helpers_class_ngsg_class_service__WEBPACK_IMPORTED_MODULE_3__["NgsgClassService"] }, { type: _store_ngsg_store_service__WEBPACK_IMPORTED_MODULE_5__["NgsgStoreService"] }]; }, null); })();


/***/ }),

/***/ "../ng-sortgrid/src/lib/ngsg-item.directive.ts":
/*!*****************************************************!*\
  !*** ../ng-sortgrid/src/lib/ngsg-item.directive.ts ***!
  \*****************************************************/
/*! exports provided: NgsgItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsgItemDirective", function() { return NgsgItemDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/element/ngsg-elements.helper */ "../ng-sortgrid/src/lib/helpers/element/ngsg-elements.helper.ts");
/* harmony import */ var _helpers_scroll_scroll_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/scroll/scroll-helper.service */ "../ng-sortgrid/src/lib/helpers/scroll/scroll-helper.service.ts");
/* harmony import */ var _mutliselect_ngsg_selection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mutliselect/ngsg-selection.service */ "../ng-sortgrid/src/lib/mutliselect/ngsg-selection.service.ts");
/* harmony import */ var _shared_ngsg_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/ngsg-events.service */ "../ng-sortgrid/src/lib/shared/ngsg-events.service.ts");
/* harmony import */ var _sort_reflection_ngsg_reflect_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sort/reflection/ngsg-reflect.service */ "../ng-sortgrid/src/lib/sort/reflection/ngsg-reflect.service.ts");
/* harmony import */ var _sort_sort_ngsg_sort_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sort/sort/ngsg-sort.service */ "../ng-sortgrid/src/lib/sort/sort/ngsg-sort.service.ts");
/* harmony import */ var _store_ngsg_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/ngsg-store.service */ "../ng-sortgrid/src/lib/store/ngsg-store.service.ts");

















const selector = '[ngSortgridItem]';
class NgsgItemDirective {
    constructor(el, sortService, selectionService, reflectService, ngsgStore, ngsgEventService, scrollHelperService) {
        this.el = el;
        this.sortService = sortService;
        this.selectionService = selectionService;
        this.reflectService = reflectService;
        this.ngsgStore = ngsgStore;
        this.ngsgEventService = ngsgEventService;
        this.scrollHelperService = scrollHelperService;
        this.ngSortGridGroup = 'defaultGroup';
        this.autoScroll = false;
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selected = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.ngsgEventService.dropped$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(() => this.selected = false);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.el.nativeElement, 'drag').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["throttleTime"])(20), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(() => this.autoScroll)).subscribe(() => {
            this.scrollHelperService.scrollIfNecessary(event, {
                top: this.scrollPointTop,
                bottom: this.scrollPointBottom
            }, this.scrollSpeed);
        });
    }
    ngOnChanges(changes) {
        const sortGridItemChanges = changes.ngSortGridItems;
        const sortGridItems = sortGridItemChanges.currentValue ? sortGridItemChanges.currentValue : [];
        if (!this.ngsgStore.hasGroup(this.ngSortGridGroup)) {
            this.ngsgStore.initState(this.ngSortGridGroup, sortGridItems);
            return;
        }
        this.ngsgStore.setItems(this.ngSortGridGroup, sortGridItems);
    }
    ngAfterViewInit() {
        this.el.nativeElement.draggable = true;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    dragStart(event) {
        if (!this.occuredOnHost(event)) {
            return;
        }
        this.selectionService.selectElementIfNoSelection(this.ngSortGridGroup, event.target);
        this.sortService.initSort(this.ngSortGridGroup);
    }
    dragEnter() {
        if (!this.ngsgStore.hasSelectedItems(this.ngSortGridGroup)) {
            return;
        }
        this.sortService.sort(this.el.nativeElement);
    }
    dragOver(event) {
        if (event.preventDefault) {
            // Necessary. Allows us to drop.
            event.preventDefault();
        }
        return false;
    }
    drop() {
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
    clicked() {
        this.selected = !this.isItemCurrentlySelected();
        this.selectionService.updateSelectedDragItem(this.ngSortGridGroup, this.el.nativeElement, this.selected);
    }
    isItemCurrentlySelected() {
        const index = _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_3__["NgsgElementsHelper"].findIndex(this.el.nativeElement);
        return !!this.ngsgStore.getSelectedItems(this.ngSortGridGroup)
            .find(element => element.originalIndex === index);
    }
    occuredOnHost(event) {
        return event.target.matches(selector);
    }
}
NgsgItemDirective.ɵfac = function NgsgItemDirective_Factory(t) { return new (t || NgsgItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sort_sort_ngsg_sort_service__WEBPACK_IMPORTED_MODULE_8__["NgsgSortService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mutliselect_ngsg_selection_service__WEBPACK_IMPORTED_MODULE_5__["NgsgSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sort_reflection_ngsg_reflect_service__WEBPACK_IMPORTED_MODULE_7__["NgsgReflectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_ngsg_store_service__WEBPACK_IMPORTED_MODULE_9__["NgsgStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_ngsg_events_service__WEBPACK_IMPORTED_MODULE_6__["NgsgEventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helpers_scroll_scroll_helper_service__WEBPACK_IMPORTED_MODULE_4__["ScrollHelperService"])); };
NgsgItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgsgItemDirective, selectors: [["", "ngSortgridItem", ""]], hostBindings: function NgsgItemDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragstart", function NgsgItemDirective_dragstart_HostBindingHandler($event) { return ctx.dragStart($event); })("dragenter", function NgsgItemDirective_dragenter_HostBindingHandler() { return ctx.dragEnter(); })("dragover", function NgsgItemDirective_dragover_HostBindingHandler($event) { return ctx.dragOver($event); })("dragend", function NgsgItemDirective_dragend_HostBindingHandler() { return ctx.drop(); })("click", function NgsgItemDirective_click_HostBindingHandler() { return ctx.clicked(); });
    } }, inputs: { ngSortGridGroup: "ngSortGridGroup", ngSortGridItems: "ngSortGridItems", scrollPointTop: "scrollPointTop", scrollPointBottom: "scrollPointBottom", scrollSpeed: "scrollSpeed", autoScroll: "autoScroll" }, outputs: { sorted: "sorted" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgsgItemDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _sort_sort_ngsg_sort_service__WEBPACK_IMPORTED_MODULE_8__["NgsgSortService"] }, { type: _mutliselect_ngsg_selection_service__WEBPACK_IMPORTED_MODULE_5__["NgsgSelectionService"] }, { type: _sort_reflection_ngsg_reflect_service__WEBPACK_IMPORTED_MODULE_7__["NgsgReflectService"] }, { type: _store_ngsg_store_service__WEBPACK_IMPORTED_MODULE_9__["NgsgStoreService"] }, { type: _shared_ngsg_events_service__WEBPACK_IMPORTED_MODULE_6__["NgsgEventsService"] }, { type: _helpers_scroll_scroll_helper_service__WEBPACK_IMPORTED_MODULE_4__["ScrollHelperService"] }]; }, { ngSortGridGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ngSortGridItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollPointTop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollPointBottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollSpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sorted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragstart', ['$event']]
        }], dragEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragenter']
        }], dragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragover', ['$event']]
        }], drop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragend']
        }], clicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "../ng-sortgrid/src/lib/ngsg.module.ts":
/*!*********************************************!*\
  !*** ../ng-sortgrid/src/lib/ngsg.module.ts ***!
  \*********************************************/
/*! exports provided: NgsgModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsgModule", function() { return NgsgModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngsg_item_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngsg-item.directive */ "../ng-sortgrid/src/lib/ngsg-item.directive.ts");



class NgsgModule {
}
NgsgModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgsgModule });
NgsgModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgsgModule_Factory(t) { return new (t || NgsgModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgsgModule, { declarations: [_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_1__["NgsgItemDirective"]], exports: [_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_1__["NgsgItemDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgsgModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_1__["NgsgItemDirective"]],
                exports: [_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_1__["NgsgItemDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "../ng-sortgrid/src/lib/shared/ngsg-events.service.ts":
/*!************************************************************!*\
  !*** ../ng-sortgrid/src/lib/shared/ngsg-events.service.ts ***!
  \************************************************************/
/*! exports provided: NgsgEventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsgEventsService", function() { return NgsgEventsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");



class NgsgEventsService {
    constructor() {
        this.dropped$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
}
NgsgEventsService.ɵfac = function NgsgEventsService_Factory(t) { return new (t || NgsgEventsService)(); };
NgsgEventsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgsgEventsService, factory: NgsgEventsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgsgEventsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "../ng-sortgrid/src/lib/sort/reflection/ngsg-reflect.service.ts":
/*!**********************************************************************!*\
  !*** ../ng-sortgrid/src/lib/sort/reflection/ngsg-reflect.service.ts ***!
  \**********************************************************************/
/*! exports provided: NgsgReflectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsgReflectService", function() { return NgsgReflectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/element/ngsg-elements.helper */ "../ng-sortgrid/src/lib/helpers/element/ngsg-elements.helper.ts");
/* harmony import */ var _store_ngsg_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/ngsg-store.service */ "../ng-sortgrid/src/lib/store/ngsg-store.service.ts");





class NgsgReflectService {
    constructor(ngsgStore) {
        this.ngsgStore = ngsgStore;
    }
    reflectChanges(key, element) {
        const items = this.ngsgStore.getItems(key);
        const selectedElements = this.ngsgStore.getSelectedItems(key);
        const selectedElementIndices = this.getSelectedElementsIndices(selectedElements);
        const selectedItems = this.getSelectedItems(items, selectedElementIndices);
        const sortedIndices = selectedElementIndices.sort();
        const dropIndex = this.findDropIndex(selectedElements, element);
        while (sortedIndices.length > 0) {
            items.splice(sortedIndices.pop(), 1);
        }
        const result = this.getReflectedItems(items, selectedItems, dropIndex);
        this.ngsgStore.setItems(key, result);
        return result;
    }
    getReflectedItems(items, selectedItems, dropIndex) {
        const beforeSelection = items.slice(0, dropIndex);
        const afterSelection = items.slice(dropIndex, items.length);
        return [...beforeSelection, ...selectedItems, ...afterSelection];
    }
    getSelectedItems(items, selectedElementIndexes) {
        const selectedItems = [];
        selectedElementIndexes.forEach(index => {
            selectedItems.push(items[index]);
        });
        return selectedItems;
    }
    getSelectedElementsIndices(selectedElements) {
        return selectedElements.map((selectedElement) => selectedElement.originalIndex);
    }
    findDropIndex(selectedElements, element) {
        if (this.isDropInSelection(selectedElements, element)) {
            return _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_1__["NgsgElementsHelper"].findIndex(selectedElements[0].node);
        }
        return _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_1__["NgsgElementsHelper"].findIndex(element);
    }
    isDropInSelection(collection, dropElement) {
        return !!collection.find((dragElment) => dragElment.node === dropElement);
    }
}
NgsgReflectService.ɵfac = function NgsgReflectService_Factory(t) { return new (t || NgsgReflectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_store_ngsg_store_service__WEBPACK_IMPORTED_MODULE_2__["NgsgStoreService"])); };
NgsgReflectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgsgReflectService, factory: NgsgReflectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgsgReflectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _store_ngsg_store_service__WEBPACK_IMPORTED_MODULE_2__["NgsgStoreService"] }]; }, null); })();


/***/ }),

/***/ "../ng-sortgrid/src/lib/sort/sort/ngsg-sort.service.ts":
/*!*************************************************************!*\
  !*** ../ng-sortgrid/src/lib/sort/sort/ngsg-sort.service.ts ***!
  \*************************************************************/
/*! exports provided: NgsgSortService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsgSortService", function() { return NgsgSortService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _helpers_class_ngsg_class_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/class/ngsg-class.service */ "../ng-sortgrid/src/lib/helpers/class/ngsg-class.service.ts");
/* harmony import */ var _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/element/ngsg-elements.helper */ "../ng-sortgrid/src/lib/helpers/element/ngsg-elements.helper.ts");
/* harmony import */ var _store_ngsg_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/ngsg-store.service */ "../ng-sortgrid/src/lib/store/ngsg-store.service.ts");








class NgsgSortService {
    constructor(classService, ngsgStore) {
        this.classService = classService;
        this.ngsgStore = ngsgStore;
    }
    initSort(group) {
        this.dragIndex = this.ngsgStore.getFirstSelectItem(group).originalIndex;
        this.dragElements = this.ngsgStore.getSelectedItems(group);
    }
    sort(dropElement) {
        const hoverIndex = _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_3__["NgsgElementsHelper"].findIndex(dropElement);
        const el = this.getSibling(dropElement, this.dragIndex, hoverIndex);
        if (this.isDropInSelection(el)) {
            return;
        }
        this.dragElements.forEach((dragElement) => {
            const insertedNode = dropElement.parentNode.insertBefore(dragElement.node, el.node);
            this.classService.addPlaceHolderClass(insertedNode);
        });
        this.dragIndex = _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_3__["NgsgElementsHelper"].findIndex(this.dragElements[0].node);
    }
    endSort() {
        this.dragElements.forEach((dragElement) => {
            this.updateDropedItem(dragElement.node);
        });
    }
    getSibling(dropElement, dragIndex, hoverIndex) {
        if (dragIndex < hoverIndex) {
            return { node: dropElement.nextSibling, originalIndex: hoverIndex + 1 };
        }
        return { node: dropElement, originalIndex: hoverIndex };
    }
    isDropInSelection(dropElement) {
        return !!this.dragElements.find((dragElment) => dragElment.node === dropElement.node);
    }
    updateDropedItem(item) {
        this.classService.removePlaceHolderClass(item);
        this.classService.addDroppedClass(item);
        this.classService.removeSelectedClass(item);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(500).subscribe(() => this.classService.removeDroppedClass(item));
    }
}
NgsgSortService.ɵfac = function NgsgSortService_Factory(t) { return new (t || NgsgSortService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_helpers_class_ngsg_class_service__WEBPACK_IMPORTED_MODULE_2__["NgsgClassService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_store_ngsg_store_service__WEBPACK_IMPORTED_MODULE_4__["NgsgStoreService"])); };
NgsgSortService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgsgSortService, factory: NgsgSortService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgsgSortService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _helpers_class_ngsg_class_service__WEBPACK_IMPORTED_MODULE_2__["NgsgClassService"] }, { type: _store_ngsg_store_service__WEBPACK_IMPORTED_MODULE_4__["NgsgStoreService"] }]; }, null); })();


/***/ }),

/***/ "../ng-sortgrid/src/lib/store/ngsg-store.service.ts":
/*!**********************************************************!*\
  !*** ../ng-sortgrid/src/lib/store/ngsg-store.service.ts ***!
  \**********************************************************/
/*! exports provided: NgsgStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsgStoreService", function() { return NgsgStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NgsgStoreService {
    constructor() {
        this.state = new Map();
    }
    initState(group, items = [], classes = {}) {
        this.state.set(group, { items: [...items], classes, selectedItems: [] });
    }
    addSelectedItem(group, dragElement) {
        this.state.get(group).selectedItems.push(dragElement);
    }
    removeSelectedItem(group, item) {
        const updatedItems = this.state.get(group).selectedItems
            .filter((dragElement) => dragElement.node !== item);
        this.setSelectedItems(group, updatedItems);
    }
    setItems(group, items) {
        this.state.get(group).items = [...items];
    }
    getItems(group) {
        return this.state.get(group).items;
    }
    hasItems(group) {
        return this.getItems(group).length > 0;
    }
    hasGroup(group) {
        return this.state.has(group);
    }
    getSelectedItems(group) {
        return this.state.get(group).selectedItems;
    }
    setSelectedItems(group, selectedItems) {
        this.state.get(group).selectedItems = [...selectedItems];
    }
    getFirstSelectItem(group) {
        return this.state.get(group).selectedItems[0];
    }
    hasSelectedItems(group) {
        return this.getSelectedItems(group).length > 0;
    }
    resetSelectedItems(group) {
        this.setSelectedItems(group, []);
    }
    getClasses(group) {
        return this.state.get(group).classes;
    }
}
NgsgStoreService.ɵfac = function NgsgStoreService_Factory(t) { return new (t || NgsgStoreService)(); };
NgsgStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgsgStoreService, factory: NgsgStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgsgStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/card/card.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/card/card.component.ts ***!
  \***********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CardComponent {
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["ngsg-card"]], inputs: { item: "item" }, decls: 3, vars: 1, consts: [[2, "color", "darkslategray"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item, " ");
    } }, styles: ["[_nghost-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  font-size: 30pt;\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n  0 2px 2px 0 rgba(0, 0, 0, 0.14),\n  0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXNvcnRncmlkLWRlbW8vc3JjL2FwcC9zaGFyZWQvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix1REFBdUQ7RUFDdkQ7O2lDQUUrQjtBQUNqQyIsImZpbGUiOiJwcm9qZWN0cy9uZy1zb3J0Z3JpZC1kZW1vL3NyYy9hcHAvc2hhcmVkL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBjdXJzb3I6IG1vdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngsg-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css']
            }]
    }], null, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["ngsg-demo-header"]], decls: 8, vars: 0, consts: [[1, "header", "py-5", "mb-5"], [1, "container", "h-100"], [1, "row", "h-100", "align-items-center"], [1, "col-lg-12"], [1, "display-4", "text-white", "mt-5", "mb-2"], [1, "lead", "mb-5", "text-white"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Draggable sort grid with multiselction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Use the ngSortgridItem directive to turn your lists into a grid where single or even multiple files can be sorted via drag & drop.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header[_ngcontent-%COMP%] {\n  background: #c30230;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXNvcnRncmlkLWRlbW8vc3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InByb2plY3RzL25nLXNvcnRncmlkLWRlbW8vc3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNjMzAyMzA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngsg-demo-header',
                templateUrl: 'header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function NavComponent_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.subtitle);
} }
const _c0 = function (a0) { return { "height": a0 }; };
const _c1 = function (a0) { return { "fixed-top": a0 }; };
class NavComponent {
    constructor() {
        this.fixed = false;
        this.height = '140px';
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["ngsg-demo-nav"]], inputs: { fixed: "fixed", height: "height", subtitle: "subtitle" }, decls: 15, vars: 7, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", 3, "ngStyle", "ngClass"], [1, "container"], ["href", "#", 1, "navbar-brand", 2, "font-size", "30px"], ["src", "assets/ng-sortgrid-logo.png", 1, "logo"], ["class", "subtitle", 4, "ngIf"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "active"], ["href", "https://twitter.com/kreuzercode", "target", "_blank", 1, "nav-link"], [1, "icon", "fab", "fa-twitter", "fa-2x"], [1, "nav-item"], ["href", "https://github.com/kreuzerk/ng-sortgrid", "target", "_blank", 1, "nav-link"], [1, "icon", "fab", "fa-github", "fa-2x"], [1, "subtitle"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavComponent_small_4_Template, 2, 1, "small", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.height))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.fixed));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subtitle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".navbar[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 1px solid #c30230;\n}\n\n.logo[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  width: 250px;\n  height: 80px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  color: #c30230;\n  font-size: 40px;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  color: darkgray;\n  display: block;\n  margin-left: 50px;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXNvcnRncmlkLWRlbW8vc3JjL2FwcC9zaGFyZWQvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoicHJvamVjdHMvbmctc29ydGdyaWQtZGVtby9zcmMvYXBwL3NoYXJlZC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzMwMjMwO1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiAjYzMwMjMwO1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGNvbG9yOiBkYXJrZ3JheTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngsg-demo-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.css']
            }]
    }], null, { fixed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card/card.component */ "./src/app/shared/card/card.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/shared/nav/nav.component.ts");
/* harmony import */ var _step_step_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./step/step.component */ "./src/app/shared/step/step.component.ts");







class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_step_step_component__WEBPACK_IMPORTED_MODULE_5__["StepComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_step_step_component__WEBPACK_IMPORTED_MODULE_5__["StepComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_step_step_component__WEBPACK_IMPORTED_MODULE_5__["StepComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]],
                exports: [_step_step_component__WEBPACK_IMPORTED_MODULE_5__["StepComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/step/step.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/step/step.component.ts ***!
  \***********************************************/
/*! exports provided: StepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepComponent", function() { return StepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function StepComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/" + ctx_r0.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class StepComponent {
}
StepComponent.ɵfac = function StepComponent_Factory(t) { return new (t || StepComponent)(); };
StepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StepComponent, selectors: [["ngsg-demo-step"]], inputs: { title: "title", image: "image" }, decls: 4, vars: 2, consts: [[1, "step-title"], ["class", "step-image", 3, "src", 4, "ngIf"], [1, "step-image", 3, "src"]], template: function StepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StepComponent_img_2_Template, 1, 1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".step-title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.step-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXNvcnRncmlkLWRlbW8vc3JjL2FwcC9zaGFyZWQvc3RlcC9zdGVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InByb2plY3RzL25nLXNvcnRncmlkLWRlbW8vc3JjL2FwcC9zaGFyZWQvc3RlcC9zdGVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RlcC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zdGVwLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngsg-demo-step',
                templateUrl: 'step.component.html',
                styleUrls: ['step.component.css']
            }]
    }], null, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~introduction-introduction-module~scrolling-scrolling-module-es2015.js.map