import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-templatereference',
  imports: [CommonModule],
  templateUrl: './templatereference.component.html',
  styleUrls: ['./templatereference.component.css']
})
export class TemplatereferenceComponent {
  @ViewChild('vcr', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild('greeting') greetingTemplate!: TemplateRef<any>;
  @ViewChild('farewell') farewellTemplate!: TemplateRef<any>;

  currentTemplate!: TemplateRef<any>;

  showTemplate(templateType: string) {
    this.vcr.clear();
    if (templateType === 'greeting') {
      this.vcr.createEmbeddedView(this.greetingTemplate);
    } else if (templateType === 'farewell') {
      this.vcr.createEmbeddedView(this.farewellTemplate);
    }
  }

  showFirst() {
    this.currentTemplate = this.greetingTemplate;
  }

  showSecond() {
    this.currentTemplate = this.farewellTemplate;
  }
}
