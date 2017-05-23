import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LaugComponent } from './laug/laug.component';
import { LaugDetailComponent } from './laug/laug-detail/laug-detail.component';
import { LaugListComponent } from './laug/laug-list/laug-list.component';
import { LaugItemComponent } from './laug/laug-list/laug-item/laug-item.component';
import { FrivilligComponent } from './frivillig/frivillig.component';
import { FrivilligListComponent } from './frivillig/frivillig-list/frivillig-list.component';
import { FrivilligItemComponent } from './frivillig/frivillig-list/frivillig-item/frivillig-item.component';
import { FrivilligDetaljerComponent } from './frivillig/frivillig-detaljer/frivillig-detaljer.component';


@NgModule({
  declarations: [
    AppComponent,
    LaugComponent,
    LaugDetailComponent,
    LaugListComponent,
    LaugItemComponent,
    FrivilligComponent,
    FrivilligListComponent,
    FrivilligItemComponent,
<<<<<<< HEAD
=======
    FrivilligDetaljerComponent
>>>>>>> 0d1220f272d4de34a690dac697dbfc04207674fc
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
