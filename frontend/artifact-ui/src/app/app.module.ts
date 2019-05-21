import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GotNavBarComponent } from "./got-nav-bar/got-nav-bar.component";
import { MemberListComponent } from './member-list/member-list.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [AppComponent, GotNavBarComponent, MemberListComponent],
  imports: [BrowserModule, AppRoutingModule, MatInputModule,MatCardModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
