import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  // private http = inject(HttpClient);
  log(message: string) {
    console.log(`[Logger]: ${message}`);
  }
}
