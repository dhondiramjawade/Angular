import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { CFrameModule } from "@jd/c-frame";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CFrameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
