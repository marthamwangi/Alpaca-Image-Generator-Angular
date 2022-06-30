import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AlpacaStylesComponent } from './alpaca-styles/alpaca-styles.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessoriesComponent,
    AlpacaStylesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
