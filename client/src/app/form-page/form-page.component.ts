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
export class FormPageComponent implements OnInit {
  datos = '';
  modoEdicion = false;=

  constructor(private stockService: StockService) {}

  formularioContacto = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required)
  });

  ngOnInit() {
    const blockId = this.route.snapshot.paramMap.get('id');
    if (blockId) {
      this.modoEdicion = true;
      this.stockService.getProduct(blockId).subscribe(
        (block: any) => {
          this.formularioContacto.patchValue(block);
        },
        (error: any) => {
          console.error('Error al obtener los datos del bloque:', error);
        }
      );
    }
  }

  submit() {
    const formData = this.formularioContacto.value;
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
    this.datos = jsonData;

    if (this.modoEdicion) {
      this.stockService.updateProduct(formData).subscribe(
        (data: any) => {
        },
        (error: any) => {
          console.error('Error al actualizar el bloque:', error);
        }
      );
    } else {
      this.stockService.createProduct(formData).subscribe(
        (data: any) => {
        },
        (error: any) => {
          console.error('Error al crear el bloque:', error);
        }
      );
    }
  }
}