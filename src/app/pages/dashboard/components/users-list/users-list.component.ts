import { Component } from '@angular/core';
import { UsersService } from '../../../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
    public users = [];

    public loading = {
        users: true
    }

    constructor(
        private _usersService: UsersService,
    ) { }

    ngOnInit(): void {
        this.getData();
    }

    getData() {
        this.loading.users = true;
        setTimeout(() => {
            this.users = this._usersService.getList();
            this.loading.users = false;
        }, 1000);
    }
}
