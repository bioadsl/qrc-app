import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users: User[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  saveToCSV() {
    this.dataService.saveToCSV();
  }

  saveToJSON() {
    this.dataService.saveToJSON();
  }
}