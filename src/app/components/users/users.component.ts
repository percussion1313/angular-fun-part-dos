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
    email: ''
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
        email: 'johndoe@gmail.com',
        isActive: true,
        registered: new Date('02/09/2016 12:30:00'),
        hide: true
    },
    {
      firstName: 'Bill',
      lastName: 'Lastname',
        email: 'billlastname@gmail.com',
        isActive: false,
        registered: new Date('11/09/2018 8:13:00'),
        hide: true
      }, 
      {
        firstName: 'Tim',
        lastName: 'Hello',
        email: 'timhello@gmail.com',
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
    email:''
    }
  }
  
 onSubmit(e) {
   console.log('submit')

   e.preventDefault();
 }


}
