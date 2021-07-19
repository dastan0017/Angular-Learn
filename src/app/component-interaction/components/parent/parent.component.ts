import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  messages: string[] = [];
  newMessage: string = '';
  @ViewChild('messageBox') input!: string;

  constructor() {}

  ngOnInit(): void {}

  sendMessage(msg: string) {
    this.messages.push(msg);

    this.newMessage = '';
  }

  deleteMessage(el: string) {
    this.messages = this.messages.filter((msg) => msg !== el);
  }
}
