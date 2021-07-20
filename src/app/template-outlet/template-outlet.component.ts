import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-outlet',
  templateUrl: './template-outlet.component.html',
  styleUrls: ['./template-outlet.component.scss'],
})
export class TemplateOutletComponent implements OnInit {
  textFromComponent: string =
    'Hello from class of this component, This message is from class of the component';
  constructor() {}

  ngOnInit(): void {}
}
