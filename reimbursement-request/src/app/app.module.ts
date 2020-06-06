import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestListEditComponent } from './request-list/request-list-edit/request-list-edit.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { RequestComponent } from './request/request.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestListComponent,
    RequestListEditComponent,
    NewRequestComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
