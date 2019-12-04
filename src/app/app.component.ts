import { Component } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'App-rest-service';
  users: any[] = [];
  FilteredUsers: any[] = [];


  constructor(protected userService: UserService) {
    }

    ngOnInit() {
        this.userService.getUsers().subscribe(
          (data) => {
            this.users = data['results'];
            this.FilteredUsers = this.users;
          },
          (error) => {
            console.error(error);
          }
        );
      }

    filterByName(filterVal: any) {
      console.log(filterVal);
      if(filterVal == 'all') {
        this.FilteredUsers = this.users;
      } else {
        this.FilteredUsers = this.users.filter(user => user.gender == filterVal);
      }
      console.log(this.FilteredUsers);
    }
}
