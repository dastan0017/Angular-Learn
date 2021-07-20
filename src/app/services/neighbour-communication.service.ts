import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NeighbourCommunicationService {
  private messages: string[] = [];
  private message = new Subject<string>();

  constructor() {}

  getMessages() {
    return this.messages;
  }

  onNewMessage(): Observable<string> {
    return this.message.asObservable();
  }

  addMessage(msg: string) {
    this.message.next(msg);
  }

  deleteMessage(msg: string) {
    this.messages.filter((el) => el !== msg);
  }
}
