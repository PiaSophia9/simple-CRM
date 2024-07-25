import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { DateAdapter, NativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

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
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [{ provide: DateAdapter, useClass: NativeDateAdapter }],
  templateUrl: './add-user-popup.component.html',
  styleUrl: './add-user-popup.component.scss',
})
export class AddUserPopupComponent {
  firstName: NgModel | string = '';
  lastName: NgModel | string = '';
  picker: NgModel | string = '';

  saveUser() {
    console.log(this.firstName, this.lastName, this.picker);
  }
}
