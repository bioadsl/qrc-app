import { Injectable } from '@angular/core';
import { User } from './../models/user.model';
import { saveAs } from 'file-saver';
import * as Papa from 'papaparse';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }

  saveToCSV() {
    const csv = Papa.unparse(this.users);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'users.csv');
  }

  saveToJSON() {
    const json = JSON.stringify(this.users);
    const blob = new Blob([json], { type: 'application/json;charset=utf-8;' });
    saveAs(blob, 'users.json');
  }
}