import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  public title: string;


  cards = ['Vándalo Oglodi', 'Bombasto', 'Magneta', 'Tornado','Jefferson',
          'Windstorm', 'Bombasto', 'Magneta', 'Tornado','Jefferson'];
  

  constructor() {
    this.title = 'Lista con foto y nombre';
    
   }

  ngOnInit() {

  }

}
