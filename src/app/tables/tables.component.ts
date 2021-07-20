import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FriendService } from '../services/friend.service';
import { Friend } from '../models/Friend';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription, zip } from 'rxjs';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements AfterViewInit, OnInit {
  subscription$!: Subscription;
  displayedColumns: string[] = ['age', 'name', 'surname', 'weight'];
  friendsData!: MatTableDataSource<Friend>;

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
}
