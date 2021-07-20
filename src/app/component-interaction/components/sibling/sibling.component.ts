import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { NeighbourCommunicationService } from 'src/app/services/neighbour-communication.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss'],
})
export class SiblingComponent implements OnInit, OnDestroy {
  messages!: string[];
  subscription!: Subscription;

  constructor(private messageService: NeighbourCommunicationService) {
    this.subscription = this.messageService
      .onNewMessage()
      .subscribe((message) => {
        this.messages.push(message);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
  }
}
