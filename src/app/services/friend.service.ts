import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Friend } from '../models/Friend';
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class FriendService {
  private apiURL: string = 'http://localhost:5000/friends';

  constructor(private http: HttpClient) {}

  getFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>(this.apiURL);
  }

  addFriend(user: Friend) {
    return this.http.post<Friend>(this.apiURL, user, httpOptions);
  }

  updateFriendData(friend: Friend): Observable<Friend> {
    const url = `${this.apiURL}/${friend.id}`;

    return this.http.put<Friend>(url, friend, httpOptions);
  }
}
