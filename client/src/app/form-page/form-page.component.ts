import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { StockService } from '../services/stock-service.service';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css'
})
export class FormPageComponent{
  datos = '';

  constructor(private stockService: StockService){}

  formularioContacto = new FormGroup({
    title: new FormControl('', Validators.required) ,
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required)
  });

  submit() {
    const jsonData = JSON.stringify(this.formularioContacto.value);
    console.log(jsonData);
    this.datos = jsonData;
    this.stockService.createProduct(this.formularioContacto.value).subscribe(
      (data: any) => {})
  }

}
