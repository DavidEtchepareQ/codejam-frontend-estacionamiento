import { Injectable } from '@angular/core';
import { USERS } from '../fake-data/users';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor() { }

    getList() {
        return USERS;
    }
}
