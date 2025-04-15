import { CommonModule } from '@angular/common';
import { Component, signal, resource } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-resource-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resource-signal.component.html',
  styleUrl: './resource-signal.component.css',
})
export class ResourceSignalComponent {
  userId = signal(1);

  userResource = resource<User, { id: number }>({
    request: () => ({ id: this.userId() }),
    loader: async ({ request, abortSignal }) => {
      // https://jsonplaceholder.typicode.com/users
      // https://fakestoreapi.com/users

      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${request.id}`, {
        signal: abortSignal,
      });
    console.log(response);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      return response.json();
    },
  });

  reloadUser() {
    this.userResource.reload();
  }

  nextUser() {
    this.userId.update(id => id + 1);
    this.reloadUser();
  }

  prevUser() {
    this.userId.update(id => Math.max(1, id - 1));
    this.reloadUser();
  }
}
