import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit {
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;

  searchQueries: string[] = [];
  constructor() {}

  ngOnInit(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        debounceTime(2000),
        map((event: any) => {
          return event.target.value;
        }),
        distinctUntilChanged()
      )
      .subscribe(() => {
        alert(
          'You stopped typing bro\n your current search title is: ' +
            this.searchInput.nativeElement.value
        );
        this.searchTitle(this.searchInput.nativeElement.value);
      });
  }

  searchTitle(query: string) {
    this.searchQueries.push(query);
  }
}
