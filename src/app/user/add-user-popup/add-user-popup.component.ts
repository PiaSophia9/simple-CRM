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
  styleUrl: './add-user-popup.component.scss',
})
export class AddUserPopupComponent {
  user: User = {};

  firstName: string = '';
  lastName: string = '';
  street: string = '';
  zip: number = 0;
  city: string = '';
  picker: number = 0;

  saveUser() {
    console.log(
      this.firstName,
      this.lastName,
      this.picker,
      this.street,
      this.zip,
      this.city
    );
  }
}
