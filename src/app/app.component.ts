import { Component } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';
//import Any = jasmine.Any;

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

// Add a private "addFriendService" property and typehint it.
  private addFriendService : AddFriendService;

//In your app.component.ts also import your service and make a constructor in the component class.
  constructor(addFriendService: AddFriendService) {
    this.addFriendService = addFriendService;
  }

  private allFriends : [];


//In your component class, define the function and console log your friend model.
// Now when you submit you'll see the data appear in your console.
  public addFriend(){

    const observable= this.addFriendService.addFriend(this.friend)

    observable.subscribe(data => console.log(data), error => console.log(error))

    console.log(this.friend)
  }

  public async displayFriendList(url:string) : Promise<any>  {
    let response = await fetch (url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    this.allFriends = await response.json();

  }



}



//Make a new public async function in the component and pass the url as a parameter.
//Typehint the parameter and the function. The function will return a Promise of type any.
// A typehint of a promise with type looks like this: Promise.



