import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  map,
} from 'rxjs/operators';

import { DebounceTimeService } from '../services/debounce-time.service';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit {
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;
  @ViewChild('searchInput2', { static: true }) searchInput2!: ElementRef;
  subscriber$!: Subscription;
  searchQueries: string[] = [];
  ///////////////////////////////
  input1 = new FormControl('');
  input2 = new FormControl('');
  constructor(private searchService: DebounceTimeService) {}

  ngOnInit(): void {
    // 1. Creating Observable right here
    this.input1.valueChanges
      .pipe(
        debounceTime(2000),
        map((event: any) => {
          return event.target.value;
        }),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        alert(
          'You stopped typing bro\n your current search title is: ' + value
        );
        this.searchTitle(value);
      });

    // 2. Subscribing to created observable
    this.subscriber$ = this.searchService
      .searchMessage(this.input2.valueChanges)
      .subscribe((value) => {
        alert(
          'You stopped typing bro\n your current search title is: ' + value
        );
        this.searchTitle(value);
      });
  }

  searchTitle(query: string) {
    this.searchQueries.push(query);
  }
}
