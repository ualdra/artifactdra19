import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  public title: string;


  usuarios = ['Jose', 'Jesus ', 'Jefferson', 'Razvan','Julio',
          'Windstorm', 'Bombasto', 'Santi', 'Tornado','pepe'];
  

  constructor() {
    this.title = 'Lista  foto, nombre y descriptción';
    
   }

  ngOnInit() {

  }

}
