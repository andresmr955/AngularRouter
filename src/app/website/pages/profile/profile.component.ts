import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user: User | null = null;

  constructor(private authService: AuthService){}

  ngOnInit(){
    // this.authService.getProfile().subscribe(
    //   data => {
    //     this.user = data
    //     console.log(this.user)
    //   }
    // )

    this.authService.myuser$.subscribe(
      data => {
        this.user = data
        console.log(this.user)
      }
    )
  }
}
