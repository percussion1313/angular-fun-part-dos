import  { Component } from '@angular/core';
import { User } from '../../models/User'
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})

export class UserComponent {
    user: User
    

    constructor() {
        this.user = {
            firstName: 'John',
            lastName: 'Doe',
            age: 87,
            address: {
                street: '123 main st',
                city: 'Los Angeles',
                state: 'California'
            }
        }
    }

    sayHello() {
        console.log(`Hello`)
    }

    hasBirthday() {
       
    }

   
}