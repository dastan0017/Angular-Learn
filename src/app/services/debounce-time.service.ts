import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DebounceTimeService {
  constructor() {}

  searchMessage(msg: Observable<any>) {
    return msg.pipe(
      debounceTime(2000),
      map((message: any) => {
        return message;
      }),
      distinctUntilChanged()
    );
  }
}
