import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { UserService } from './users/user.service';
import { AddUserModalComponent } from './users/modals/add-user-modal.component';

const routes = [
      {
        path: '', component: UsersComponent
      }
]

@NgModule({
  declarations: [
      AppComponent,
      UsersComponent,
      AddUserModalComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routes),
      HttpClientModule,
      NgbModule.forRoot(),
  ],
  entryComponents: [
      AddUserModalComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
