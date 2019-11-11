import {Component} from '@angular/core';
@Component({
 // template : '<h3>This is word Component</h3>',
  templateUrl: './word.component.html',
  selector: 'app-word',
  styleUrls: ['./word.component.css']
})

export class WordComponent {
  en:string = 'Hello';
  vn:string = 'Mr:Chinh';
  imageUrl = 'https://cdn.pixabay.com/photo/2017/07/10/23/38/fuca-2491995__340.jpg';
  forgot = false;
  toggleForgot() {
    this.forgot = !this.forgot;
  }

}

