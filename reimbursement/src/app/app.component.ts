import { Component, OnInit } from '@angular/core';
import { RequestsService } from './requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  requests: {description: string, amount: number}[] = [];

  constructor(private requestsService: RequestsService){}

  ngOnInit () {
    this.requests = this.requestsService.requests;
  }

}
