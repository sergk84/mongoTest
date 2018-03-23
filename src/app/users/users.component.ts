import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AddUserModalComponent } from './modals/add-user-modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    public users: Array<User>;

    constructor(
        private userSrv: UserService,
        private modalService: NgbModal
    ) { }

    ngOnInit() {
        this.userSrv.getUserList().subscribe(users => {
            this.users = users;
        });
    }

    addUser(): void {
        const modalRef = this.modalService.open(AddUserModalComponent);
    }

    updateUser(user): void {
        const modalRef = this.modalService.open(AddUserModalComponent);
        modalRef.componentInstance.user = user;
    }

    delete(id): void {
        this.userSrv.deleteUser(id).subscribe(() => {
            this.userSrv.getUserList().subscribe(users => {
                  this.users = users;
            });
        });
    }
}
