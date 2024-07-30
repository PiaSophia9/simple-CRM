import { Component } from '@angular/core';
import { User } from '../../user';
import { FormsModule, NgModel } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_NATIVE_DATE_FORMATS,
  MatNativeDateModule,
  NativeDateAdapter,
} from '@angular/material/core';
import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserComponent } from '../user.component';

@Component({
  selector: 'app-add-user-popup',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormField,
    MatLabel,
    FormsModule,
    MatInputModule,
    MatButton,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS },
  ],
  templateUrl: './add-user-popup.component.html',
  styleUrls: ['./add-user-popup.component.scss'], // Korrigierte Eigenschaftsname
})
export class AddUserPopupComponent {
  birthdate: Date = new Date();

  user: User = {
    firstName: '',
    lastName: '',
    street: '',
    zip: '',
    city: '',
    birthdate: 0,
  };

  saveUser() {
    this.user.birthdate = this.birthdate.getTime();
    console.log(this.user);
  }
}
