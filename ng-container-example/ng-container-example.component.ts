import { CommonModule } from '@angular/common';
import { Component, viewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ng-container-example',
  imports:[CommonModule],
  templateUrl: './ng-container-example.component.html',
  styleUrls: ['./ng-container-example.component.css']
})
export class NgContainerExampleComponent {
  isLoggedIn = false;
   username = 'Arjun';

  basicTemplate = viewChild('loggedOut',{read:TemplateRef});

}
