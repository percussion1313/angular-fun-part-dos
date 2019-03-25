import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
  }
  users: User[];
  showExtended: boolean = true;
  isLoaded: boolean = false
  enableAdd: boolean = false;
  // currentClasses = {};
  // currentStyles = {};
  showUSerForm: boolean = false;

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
        isActive: true,
        registered: new Date('02/09/2016 12:30:00'),
        hide: true
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
        isActive: false,
        registered: new Date('11/09/2018 8:13:00'),
        hide: true
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

          isActive: true,
          registered: new Date('07/23/2016 21:01:00'),
          hide: true
        }
    ]
    this.isLoaded = true;
  
    

    this.showExtended = true; 
    // this.addUser({
    //   firstName: 'New',
    //     lastName: 'User',
    //     age: 12
    // })

    // this.setCurrentClasses();
    // this.setCurrentStyles();
  }
//   setCurrentClasses() {
//       this.currentClasses = {
//           'btn-success':this.enableAdd,
//           'big-text':this.showExtended
//       }
//   }

//   setCurrentStyles() {
//     this.currentStyles = {
//         'padding-top':this.showExtended ? '0' : '6em'
        
//     }
// }
  
  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    this.user = {
      firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
    }
  }
  
 onSubmit(e) {
   console.log('submit')

   e.preventDefault();
 }

 fireEvent(e) {
   console.log(e.type);
   console.log(e.target.value);
 }
}
