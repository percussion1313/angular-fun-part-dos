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
  enableAdd: boolean = true;
  currentClasses = {};
  currentStyles = {};
  
  ngOnInit() {
    
 
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 87,
        address: {
            street: '123 main st',
            city: 'Los Angeles',
            state: 'California'
        },
        image: 'http://lorempixel.com/400/400/people/3',
        isActive: true,
        balance: 9082,
        registered: new Date('02/09/2016 12:30:00')
    },
    {
      firstName: 'Bill',
      lastName: 'Lastname',
      age: 33,
      address: {
          street: '153 main st',
          city: 'Fake City',
          state: 'Fake State'
        },
        image: 'http://lorempixel.com/400/400/people/2',
        isActive: false,
        balance: 0,
        registered: new Date('11/09/2018 8:13:00')
      },
      {
        firstName: 'Tim',
        lastName: 'Hello',
        age: 12,
        address: {
            street: '153 main st',
            city: 'Fake City',
            state: 'Fake State'
          },
          image: 'http://lorempixel.com/400/400/people/1',
          isActive: true,
          balance: 233,
          registered: new Date('07/23/2016 21:01:00')
        }
    ]
    this.isLoaded = true;
  
    

    this.showExtended = true; 
    this.addUser({
      firstName: 'New',
        lastName: 'User',
        age: 12
    })

    this.setCurrentClasses();
    this.setCurrentStyles();
  }
  setCurrentClasses() {
      this.currentClasses = {
          'btn-success':this.enableAdd,
          'big-text':this.showExtended
      }
  }

  setCurrentStyles() {
    this.currentStyles = {
        'padding-top':this.showExtended ? '0' : '6em'
        
    }
}
  
  addUser(user: User) {
    this.users.push(user)
  }
}
