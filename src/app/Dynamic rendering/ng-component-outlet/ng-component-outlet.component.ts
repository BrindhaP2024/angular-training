import { Component, Input } from '@angular/core';
import { AdminBioComponent } from '../admin-bio/admin-bio.component';
import { StandardBioComponent } from '../standard-bio/standard-bio.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ng-component-outlet',
  imports: [AdminBioComponent,StandardBioComponent,CommonModule],
  templateUrl: './ng-component-outlet.component.html',
  styleUrl: './ng-component-outlet.component.css'
})
export class NgComponentOutletComponent {
   isAdmin =true;
}
