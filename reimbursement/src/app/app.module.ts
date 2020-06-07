import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewRequestComponent } from './new-request/new-request.component'; 
import { RequestListComponent } from './request-list/request-list.component';
import { RequestsService } from './requests.service';

@NgModule({
  declarations: [
    AppComponent,
    NewRequestComponent,
    RequestListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [RequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
