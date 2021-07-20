import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FriendService } from '../services/friend.service';
import { Friend } from '../models/Friend';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements AfterViewInit, OnInit {
  subscription$!: Subscription;
  displayedColumns: string[] = ['id', 'age', 'name', 'surname'];
  friendsData!: MatTableDataSource<Friend>;
  newFriend = {
    id: 1,
    age: '',
    name: '',
    surname: '',
  };
  isUpdating: boolean = false;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private friendService: FriendService) {}

  ngOnInit(): void {
    this.subscription$ = this.friendService
      .getFriends()
      .subscribe((friends) => {
        this.friendsData = new MatTableDataSource(friends);
        this.friendsData.sort = this.sort;
      });
  }

  ngAfterViewInit() {}

  addUser(event: Event) {
    event.preventDefault();
    if (
      this.newFriend.age.length &&
      this.newFriend.name.length &&
      this.newFriend.surname.length
    ) {
      this.friendService
        .addFriend({
          ...this.newFriend,
          id: this.friendsData.filteredData.length,
        })
        .subscribe((friend) => {
          this.friendsData.filteredData.push(friend);
          this.friendsData = new MatTableDataSource(
            this.friendsData.filteredData
          );
          this.friendsData.sort = this.sort;
        });

      // clear inputs
      this.newFriend = {
        id: this.friendsData.filteredData.length,
        age: '',
        name: '',
        surname: '',
      };
    }

    this.isUpdating = false;
  }

  updateElement(event: any) {
    this.newFriend = {
      id: event.target.parentElement.childNodes[0].innerHTML.toString().trim(),
      age: parseInt(event.target.parentElement.childNodes[1].innerHTML)
        .toString()
        .trim(),
      name: event.target.parentElement.childNodes[2].innerHTML
        .toString()
        .trim(),
      surname: event.target.parentElement.childNodes[3].innerHTML
        .toString()
        .trim(),
    };

    this.isUpdating = true;
  }

  update() {
    this.friendService.updateFriendData(this.newFriend).subscribe((friend) => {
      this.friendsData.filteredData[friend.id] = friend;
      this.friendsData = new MatTableDataSource(this.friendsData.filteredData);
      this.friendsData.sort = this.sort;
    });
    // clear inputs
    this.newFriend = {
      id: this.friendsData.filteredData.length,
      age: '',
      name: '',
      surname: '',
    };

    this.isUpdating = false;
  }
}
