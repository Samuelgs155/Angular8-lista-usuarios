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
  usuariosFiltrados: any[] = [];


  constructor(protected userService: UserService) {
    }

    ngOnInit() {
        this.userService.getUsers().subscribe(
          (data) => { // Success
            this.users = data['results'];
            this.usuariosFiltrados = this.users;
            //this.filtrarPorNombre();
          },
          (error) => {
            console.error(error);
          }
        );
      }

    filtrarPorNombre(filterVal: any) {
      console.log(filterVal);
      if(filterVal == 'all') {
        this.usuariosFiltrados = this.users;
      } else {
        this.usuariosFiltrados = this.users.filter(user => user.gender == filterVal);
      }
      console.log(this.usuariosFiltrados);
    }
}
