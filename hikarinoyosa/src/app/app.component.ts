import { Component } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  
  // title = 'hikarinoyosa';
  constructor(){

  }
  ngOnInit(){
    
  }
}
