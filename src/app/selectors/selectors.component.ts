import { Component } from '@angular/core';


@Component({
  selector: 'app-selectors',
  template: `
    <div class="container">

      <div dropzone>
        <p>Attribute selector content</p>
      </div>

      <div class="menu-item">
        <p>Class selector content</p>
      </div>

      <button dropzone type="reset">Reset Button</button>
    </div>
  `,
  styles: [
    `
      .container {
        padding: 20px;
        border: 1px solid #ccc;
      }
      profile-photo p {
        color: red;
      }
      [dropzone] {
        border: 2px dashed #999;
        padding: 10px;
      }
      [dropzone] p {
        color: green;
      }
      .menu-item {
        margin: 10px 0;
      }
      .menu-item p {
        color: blue;
      }
      button[dropzone]:not(textarea) {
        background-color: purple;
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
      }
    `
  ],
  imports: []
})
export class SelectorsComponent {}

