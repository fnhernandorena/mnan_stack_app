import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css'
})
export class FormPageComponent implements OnInit{
  formData: FormGroup;

  constructor(private form: FormBuilder) {
    this.formData = form.group({
      title: new FormControl('',[]),
      description: new FormControl('',[]),
      category: new FormControl('',[]),
      price: new FormControl('',[]),
      stock: new FormControl('',[]),
    })
   }

  ngOnInit(): void {
    
  }
  handleSubmit(){alert("Please")}

}
