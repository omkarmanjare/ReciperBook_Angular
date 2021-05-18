import { Component, OnInit, EventEmitter,  Output } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  collapsed = true;
  @Output() selectedTab = new EventEmitter<string>();
  // constructor() { }

  // ngOnInit(): void {
  // }

  onSelect(tabToSelect : string){
    this.selectedTab.emit(tabToSelect);
  }

}
