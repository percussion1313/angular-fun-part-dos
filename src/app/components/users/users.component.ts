import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  isLoaded: boolean = false
  constructor() { }
  
  ngOnInit() {
    
  setTimeout(() => {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 87,
        address: {
            street: '123 main st',
            city: 'Los Angeles',
            state: 'California'
        }
    },
    {
      firstName: 'Bill',
      lastName: 'Lastname',
      age: 33,
      address: {
          street: '153 main st',
          city: 'Fake City',
          state: 'Fake State'
        }
      },
      {
        firstName: 'Tim',
        lastName: 'Hello',
        age: 12,
        address: {
            street: '153 main st',
            city: 'Fake City',
            state: 'Fake State'
          }
        }
    ]
    this.isLoaded = true;
  }, 2000);
    

    this.showExtended = false; 
    // this.addUser({
    //   firstName: 'New',
    //     lastName: 'User',
    //     age: 12,
    //     address: {
    //         street: '153 main st',
    //         city: 'Fake City',
    //         state: 'Fake State'
    //       }
    // })

  }

  
  addUser(user: User) {
    this.users.push(user)
  }
}
