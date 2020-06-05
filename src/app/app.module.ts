import { PostsService } from './posts/posts.service';
import { PostListComponent } from './posts/post-list/post-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from './budget-item-list/budget-item-card/budget-item-card.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { MatExpansionModule } from '@angular/material/expansion';


import { MatDialogModule } from '@angular/material/dialog';
import { AuthComponent } from './users/auth/auth.component';
import { ChangeRoleComponent } from './users/change-role/change-role.component';
import { ConfirmEmailComponent } from './users/confirm-email/confirm-email.component';
import { LoginComponent } from './users/login/login.component';
import { ModelsComponent } from './users/models/models.component';
import { RegisterComponent } from './users/register/register.component';
import { ResetPasswordComponent } from './users/reset-password/reset-password.component';
import { ResetYourPasswordComponent } from './users/reset-your-password/reset-your-password.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPagePostsComponent } from './posts/main-page-posts/main-page-posts.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    EditItemModalComponent,
    AuthComponent,
    ChangeRoleComponent,
    ConfirmEmailComponent,
    LoginComponent,
    ModelsComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ResetYourPasswordComponent,
    UserProfileComponent,
    UsersListComponent,
    PostCreateComponent,
    PostListComponent,
    NavbarComponent,
    MainPagePostsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule


  ],
  providers: [],
  entryComponents: [EditItemModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
