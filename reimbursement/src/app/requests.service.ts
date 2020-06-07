export class RequestsService {
requests = [
    {
        description: 'office chair',
        amount: 450
    },
    {
        description: 'relocation',
        amount: 396
    }
];


addRequest(description: string, amount: number) {
    this.requests.push({description: description, amount: amount});
    }

}