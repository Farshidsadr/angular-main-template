import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  //vaseye in ke parentesh betune behesh dastresi peyda kone output mizarim
  @Output() selectedLink = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(link: string) {

    this.selectedLink.emit(link);

  }

}
