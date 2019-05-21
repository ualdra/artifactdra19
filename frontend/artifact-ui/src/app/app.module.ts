import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GotNavBarComponent } from "./got-nav-bar/got-nav-bar.component";

@NgModule({
  declarations: [AppComponent, GotNavBarComponent],
  imports: [BrowserModule, AppRoutingModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
