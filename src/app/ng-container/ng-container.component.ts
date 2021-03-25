import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    { login: "bob", role: "admin", lastlogin: new Date('2/1/2021')},
    { login: "lia", role: "user", lastlogin: new Date('5/5/2021')},
    { login: "robin", role: "admin", lastlogin: new Date('10/11/2021')},
    { login: "bea", role: "admin", lastlogin: new Date('2/10/2021')},
    { login: "mike", role: "user", lastlogin: new Date('1/2/2021')},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
