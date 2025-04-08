import { Injectable } from '@angular/core';
import { HttpRequest, JsonpClientBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JsonpExampleService {
  constructor(private jsonpBackend: JsonpClientBackend) {}

  fetchData(url: string): void {
    const req = new HttpRequest<never>('JSONP', url);
    this.jsonpBackend.handle(req).subscribe({
      next: (data) => console.log('JSONP Response:', data),
      error: (err) => console.error('Error during JSONP request:', err),
    });
  }
}
