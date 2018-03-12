import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

@Output('action') eve = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  action(e){
    this.eve.emit(e);
  }

}
