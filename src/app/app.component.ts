import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loadedSelection: string = 'Recipes';

  ngOnInit(){
    // firebase.initializeApp({
    //   apiKey: "AIzaSyAdOb89EwoZ_YYApXWUyMZCg1qZjOcogTs",
    //   authDomain: "recipe-book-4ae71.firebaseapp.com"
    // })
    var config = {
      apiKey: "AIzaSyAdOb89EwoZ_YYApXWUyMZCg1qZjOcogTs",
      authDomain: "recipe-book-4ae71.firebaseapp.com",
      // databaseURL: "https://recipe-book-4ae71.firebaseio.com",
      // projectId: "recipe-book-4ae71",
      // storageBucket: "recipe-book-4ae71.appspot.com",
      // messagingSenderId: "319112547588"
    };
    firebase.initializeApp(config);
  }

  onNavigate(selection: string){
    this.loadedSelection = selection;
  }
}
