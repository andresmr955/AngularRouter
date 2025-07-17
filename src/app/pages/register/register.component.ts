import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private userService: UsersService){

  }

  createUser(){
    this.userService.create(
      {
        name: 'Andres', 
        email: "andres@gmail.com",
        password: '1234' 
      })
      .subscribe(rta => {
        console.log('Create rta: ', rta)
      })
  }
}
