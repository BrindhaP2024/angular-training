import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <label>
        Name:
        <input type="text" formControlName="name">
      </label>
      <div formGroupName="address">
        <label>
          Street:
          <input type="text" formControlName="street">
        </label>
        <label>
          City:
          <input type="text" formControlName="city">
        </label>
      </div>
      <div formArrayName="hobbies">
        <label *ngFor="let hobby of hobbies.controls; let i = index">
          Hobby {{ i + 1 }}:
          <input [formControlName]="i" placeholder="Enter hobby">
          <button type="button" (click)="removeHobby(i)">Remove</button>
        </label>
        <button type="button" (click)="addHobby()">Add Hobby</button>
      </div>
      <button type="submit" [disabled]="form.invalid">Submit</button>
    </form>
  `,
  imports:[CommonModule,ReactiveFormsModule]
})
export class ReactiveFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
      }),
      hobbies: this.fb.array([]),
    });
  }

  get hobbies(): FormArray {
    return this.form.get('hobbies') as FormArray;
  }

  addHobby(): void {
    this.hobbies.push(this.fb.control(''));
  }

  removeHobby(index: number): void {
    this.hobbies.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
