import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgbDateStruct, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../user.service';
import {User} from '../user.model';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.css']
})
export class AddUserModalComponent implements OnInit {

  @Input() user: User;
  public userForm: FormGroup;
  public title: string;

  constructor(
      private fb: FormBuilder,
      private modal: NgbModal,
      private userSrv: UserService,
      public activeModal: NgbActiveModal
  ) {

      this.userForm = this.fb.group({
          firstname: [''],
          lastname: [''],
          date_of_birth: [''],
          email: ['']
      });
  }

      ngOnInit() {
          if(this.user) {
              this.title = 'Update User';
              this.userForm.get('firstname').setValue(this.user.firstname);
              this.userForm.get('lastname').setValue(this.user.lastname);
              this.userForm.get('date_of_birth').setValue(this.user.date_of_birth);
              this.userForm.get('email').setValue(this.user.email);
          } else {
              this.title = 'Add New User';
          }
      }

      onSubmit(value): void {
          if(this.user) {
              console.log(value, this.user['_id'].$oid);
              this.userSrv.updateUser(this.userForm.value, this.user['_id'].$oid).subscribe();
          }else {
              this.userSrv.addNewUser(value).subscribe();
          }
      }

}
