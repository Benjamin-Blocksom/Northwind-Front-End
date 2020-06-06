import { Component, OnInit } from '@angular/core';
import { RequestsService } from "../shared/requests.service";
@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {

  constructor(private requestsService: RequestsService) { 
    this.requestsService.statusUpdated.subscribe(
      (status: string) => console.log('New Status: ' + status)
    );
  }

  ngOnInit(): void {
  }

}
