import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-form',
  imports :[FormsModule],
  templateUrl: './tdf-form.component.html',
  styleUrls: ['./tdf-form.component.css'],
})
export class TdfFormComponent {
  username = '';
  email = '';

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Email:', this.email);
  }
}


