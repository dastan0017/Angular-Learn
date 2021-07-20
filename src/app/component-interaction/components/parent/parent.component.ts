import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NeighbourCommunicationService } from 'src/app/services/neighbour-communication.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  @Input() template!: TemplateRef<any>;
  messages: string[] = [];
  newMessage: string = '';
  @ViewChild('messageBox') input!: string;

  constructor(private messageService: NeighbourCommunicationService) {}

  ngOnInit(): void {}

  sendMessage(msg: string): void {
    if (msg == '' || msg.length === 0) {
      return;
    }

    this.messageService.addMessage(msg);
    this.messages.push(msg);
  }

  deleteMessage(el: string) {
    this.messages = this.messages.filter((msg) => msg !== el);
    this.messageService.deleteMessage(el);
  }
}
