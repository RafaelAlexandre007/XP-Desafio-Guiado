import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css'],
})
export class TemplatesComponent {
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl(''),
  });

  onSubmit() {
    console.log(this.myForm.value);
  }
}

