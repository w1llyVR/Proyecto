import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'proyecto-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(private router: Router){
  }
  home(){
    this.router.navigateByUrl('/home');
  }
  peliculas(){
    this.router.navigateByUrl('business/peliculas')
  }
}
