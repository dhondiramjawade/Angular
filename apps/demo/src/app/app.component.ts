import { Component } from '@angular/core';

@Component({
  selector: 'a-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  data = {
    name :"Yahs",
    abc : "Abc"
  }

  onChnage(){
    console.log(this.data.name);
  }
}
