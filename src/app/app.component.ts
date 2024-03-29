/*********************************************************************************
* WEB422 – Assignment 06
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or 
* distributed to other students.
* 
* Name: Sukhmanpreet Kaur Malhi Student ID: 134893205 Date: 08th April 2022
*
* Angular App (Deployed) Link: 
*
* User API (Heroku) Link:https://vast-badlands-96722.herokuapp.com/
*
********************************************************************************/



import { Component } from '@angular/core';
//import { Router } from '@angular/router';
import { Router, Event, NavigationStart } from '@angular/router';
import { AuthService } from '../app/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web422 A5'
  searchString: string = '';
  public token: any;

  constructor(private router: Router, private auth:AuthService) { }
  handleSearch() {
    this.router.navigate(['/search'], {
      queryParams: { q: this.searchString },
    });
    this.searchString = '';
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) { // only read the token on "NavigationStart"
        this.token = this.auth.readToken();
      }
    });
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);

  }
}