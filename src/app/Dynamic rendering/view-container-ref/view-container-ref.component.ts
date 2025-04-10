import { Component, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactory } from '@angular/core';

@Component({
  selector: 'app-view-container-ref',
  templateUrl: './view-container-ref.component.html',
  styleUrls: ['./view-container-ref.component.css'] // Corrected to styleUrls
})
export class ViewContainerRefComponent implements AfterViewInit {
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  constructor() {}

  ngAfterViewInit() {

  }
}
