import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {} from 'googlemaps';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @ViewChild('map') gmapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit(): void {
    const mapProp = {
      center: new google.maps.LatLng(36.8293, -2.40442),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

}
