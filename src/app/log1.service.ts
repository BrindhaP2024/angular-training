
import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})

export class Log1Service extends LogService {
    override log(message: string) {
      super.log(`logger message extending: ${message}`);
    }
}
