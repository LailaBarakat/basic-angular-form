import { Component } from '@angular/core';
import { Friend } from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


//In your component class, instantiate the friendModel through the friend class with all the properties set to null.
// To do this you'll also need to import the Friend class.
export class AppComponent {
  title = 'project-name';
  languages : any[] = [
    "html", "css", "js", "php"
  ]
  friend = new Friend(null,null,null,null,null);
}


