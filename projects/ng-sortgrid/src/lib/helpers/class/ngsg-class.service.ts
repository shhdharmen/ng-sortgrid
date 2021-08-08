import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgsgClassService {
  public addPlaceHolderClass(element: Element): void {
    element.classList.add(PLACEHOLDER_DEFAULT_CLASS);
  }

  public removePlaceHolderClass(element: Element): void {
    element.classList.remove(PLACEHOLDER_DEFAULT_CLASS);
  }

  public addDroppedClass(element: Element): void {
    element.classList.add(DROPPED_DEFAULT_CLASS);
  }

  public removeDroppedClass(element: Element): void {
    element.classList.remove(DROPPED_DEFAULT_CLASS);
  }

  public addSelectedClass(element: Element): void {
    element.classList.add(SELECTED_DEFAULT_CLASS);
  }

  public removeSelectedClass(element: Element): void {
    element.classList.remove(SELECTED_DEFAULT_CLASS);
  }
}

export const SELECTED_DEFAULT_CLASS = 'ng-sg-selected';
export const PLACEHOLDER_DEFAULT_CLASS = 'ng-sg-placeholder';
export const DROPPED_DEFAULT_CLASS = 'ng-sg-dropped';
