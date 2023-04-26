import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'proyecto-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private router:Router)
  {
    
  }

  home(){
    this.router.navigateByUrl('/home');
  }
  peliculas(){
    this.router.navigateByUrl('business/peliculas')
  }
}
