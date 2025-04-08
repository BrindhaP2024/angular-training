import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = { name: '', isAuthorized: true };

  private users = [
    { id: 1, name: 'Brindha', email: 'Brindha@gmail.com' },
    { id: 2, name: 'Arjun', email: 'arjun@yahoo.com' }
  ];

  constructor() {}


  getUsers() {
    return this.users;
  }
}
