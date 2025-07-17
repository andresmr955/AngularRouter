import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../services/store.service'
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { TokenService } from './../../services/token.service';
import { FilesService } from 'src/app/services/files.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  token =  '';
  profile: User | null = null;
  imgRta = ''
  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private tokenService: TokenService, 
    private fileService: FilesService
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  login() {
    this.authService.loginAndGet('john@mail.com', 'changeme')
    .subscribe(user => {
      this.profile = user;
      
      const token = this.tokenService.getToken();
      console.log('Perfil de usuario:', user);
      console.log('Token de acceso:', token);
    });
  }

  downloadPdf(fileURL?: string){
    if(fileURL){
          console.log('file provided')
          this.fileService.getFile("myPdf", fileURL, 'application/pdf').subscribe()
    }else {
    console.log('no file provided');
    this.fileService.getFile("myPdf", 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf', 'application/pdf').subscribe();
  }
  }

  onUpload(event: Event){
    const element = event.target as HTMLInputElement
    const file = element.files?.item(0);

    if (file){
          this.fileService.uploadFile(file)
        .subscribe( rta => {
              this.imgRta = rta.location;
              console.log('aqui iria una imagen', this.imgRta)
              this.downloadPdf(this.imgRta);
            })
  }
    }
    

}
