import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LaddaModule } from 'angular2-ladda';

import { RootComponent } from './components/root/root.component';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    LaddaModule,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
