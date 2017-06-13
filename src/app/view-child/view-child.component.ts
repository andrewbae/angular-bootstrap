import { Component, Directive, Input, ViewChild } from '@angular/core';

@Directive({selector: 'pane'})
export class Pane {
  @Input() id: string;
}

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent {

  constructor() { }

  selectedPane: string = '';
  shouldShow: boolean = true;

  @ViewChild(Pane)
  set pane(v: Pane) {
    setTimeout(() => {this.selectedPane = v.id}, 0);
  }

  toggle() {
    this.shouldShow = !this.shouldShow;
  }
}
