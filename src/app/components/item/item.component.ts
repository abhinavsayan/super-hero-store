import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input('item') item;
  @Output('buy') buyAction = new EventEmitter();
  @Output('add') addAction = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  buy(){
    this.buyAction.emit();
  }

  add(){
    this.addAction.emit();
  }

}
