import  { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})

export class UserComponent {
    firstName = 'Peter';
    lastName = 'Sup';
    age = 26;

    constructor() {
             
    }
}
