import { Component} from '@angular/core';
import { RequestsService } from "../requests.service";

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent {
  
  constructor(private requestsService: RequestsService) {
   }

  ngOnInit(): void {
  }

  onAddRequest(requestDescription: string, requestAmount: number) {
    this.requestsService.addRequest(requestDescription, requestAmount);
  }

}
