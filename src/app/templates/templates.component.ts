import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css'],
})
export class TemplatesComponent {
  myForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
  });

  onSubmit(){
    console.log(this.myForm.value)
  }
}
