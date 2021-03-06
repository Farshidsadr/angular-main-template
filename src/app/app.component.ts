import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'main-template';
  selectedLinkInSidebar = 'dashboard';

  onNavigate(feature: string) {
    this.selectedLinkInSidebar = feature;
  }

}
