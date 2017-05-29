import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LaugComponent } from './laug/laug.component';
import { LaugDetailComponent } from './laug/laug-detail/laug-detail.component';
import { LaugListComponent } from './laug/laug-list/laug-list.component';
import { LaugItemComponent } from './laug/laug-list/laug-item/laug-item.component';
import { FrivilligComponent } from './frivillig/frivillig.component';
import { FrivilligListComponent } from './frivillig/frivillig-list/frivillig-list.component';
import { FrivilligItemComponent } from './frivillig/frivillig-list/frivillig-item/frivillig-item.component';
import { FrivilligDetaljerComponent } from './frivillig/frivillig-detaljer/frivillig-detaljer.component';
import { LaugService } from './laug.service';

const ROUTES = [ //when going to root /, redirect to /posts
  {
    path: '',
    redirectTo: 'laugs',
    pathMatch: 'full'
  },
  {
    path: 'laugs', //delare posts route
    component: LaugListComponent
  }
];

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
    FrivilligDetaljerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [LaugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
