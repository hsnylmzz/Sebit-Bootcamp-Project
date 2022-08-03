import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../model/card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Output() PersonalEvent = new EventEmitter<string>();
  @Input() post : any = {};

  constructor() {}

  ngOnInit(): void {}

  AddPersonal(name:string):void
  {
     this.PersonalEvent.emit(name);
  }
}

