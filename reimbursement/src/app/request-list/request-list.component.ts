import { Component, Input } from '@angular/core';
import { RequestsService } from "../requests.service";


@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {
@Input() request: {description: string, amount: number};
@Input() id: number;

  constructor(private requestsService: RequestsService) {}

  onAddRequest(requestDescription: string, requestAmount: number){
    this.requestsService.addRequest(requestDescription, requestAmount);
  }
}
