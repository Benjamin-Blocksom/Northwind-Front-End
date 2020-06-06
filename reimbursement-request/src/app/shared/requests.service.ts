import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class RequestsService {
requests = [
    {
        description: 'ergonomic chair',
        amount: 450.34, status: 'pending'
    },
    {
        description: 'relocation',
        amount: 396.00, status: 'approved'
    },
    {
        description: 'study material',
        amount: 94.12, status: 'denied'},
    {
        description: 'cloud services',
        amount: 8.86, status: 'approved'}, 
    {
        description: 'display adapter',
        amount: 24.95, status: 'approved'}
];

statusUpdated = new EventEmitter<string>();

addRequest(description: string, amount: number) {
    this.requests.push({description: description, amount: amount, status: 'pending'});
}

updateRequest(id: number, status: string) {
    this.requests[id].status = status;
}

}