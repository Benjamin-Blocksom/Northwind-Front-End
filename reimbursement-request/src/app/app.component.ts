import { Component, OnInit } from '@angular/core';
import { RequestsService } from "./shared/requests.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  requests: {description: string, status: string}[]=[];

  constructor(private requestsService: RequestsService){}

  ngOnInit(){
    this.requests = this.requestsService.requests;
  }
}
