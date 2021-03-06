import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule ,HttpHeaders, HTTP_INTERCEPTORS} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoViewComponent } from './components/todo-view/todo-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatCardModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodoDeleteComponent } from './components/todo-delete/todo-delete.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UserComponent } from './components/user/user.component';
import {MatButtonModule,MatToolbarModule} from  '@angular/material';
import { RegisterComponent } from './components/register/register.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { AlertComponent } from './components/alert/alert.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MessageComponent } from './components/message/message.component';
import { HomeComponent } from './components/home/home.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
//import { fakeBackendProvider } from './helpers/fake-backend';




@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoViewComponent,
    TodoAddComponent,
    TodoEditComponent,
    TodoDeleteComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    AlertComponent,
    MessageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule, 
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [MessageComponent],
})
export class AppModule { }
