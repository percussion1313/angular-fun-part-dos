import  { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {
    user: User
    

    constructor() {
        
    }
    ngOnInit() {
        this.user = {
            firstName: 'John',
            lastName: 'Doe',
            email: ''
        }
    }
    sayHello() {
        console.log(`Hello`)
    }

    hasBirthday() {
       
    }

   
}