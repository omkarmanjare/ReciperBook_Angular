import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReceipeBook';
  loadTab = 'recipe';

  onTabClicked(tabName : string){
    this.loadTab = tabName;
  }
}
