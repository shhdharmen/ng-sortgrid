import { Component } from '@angular/core';

@Component({
  selector: 'ngsg-demo-memory',
  templateUrl: 'getting-started-memory.component.html',
})
export class GettingStartedMemoryComponent {
  public items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public items2 = [
    { value: 1, isSelected: true },
    { value: 2, isSelected: true },
    { value: 3, isSelected: true },
    { value: 4, isSelected: false },
    { value: 5, isSelected: false },
    { value: 6, isSelected: false },
    { value: 7, isSelected: false },
    { value: 8, isSelected: false },
    { value: 9, isSelected: false },
    { value: 10, isSelected: false },
  ];

  itemSelected(isSelected: boolean, value: number) {
    console.log(`Is ${value} selected?`, isSelected);
  }
}
