import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { StockService } from '../services/stock-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css'
})
export class FormPageComponent implements OnInit {
  datos = '';
  modoEdicion = false;
  blockId: string = '';

  constructor(private stockService: StockService, private route: ActivatedRoute, private router: Router) {}

  formularioContacto = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required)
  });

  ngOnInit() {
    const idUrl = this.route.snapshot.paramMap.get('id');
    if(idUrl !== null){
      this.blockId=idUrl
    }
    if (this.blockId) {
      this.modoEdicion = true;
      this.stockService.getProduct(this.blockId).subscribe(
        (block: any) => {
          this.formularioContacto.patchValue(block);
        }
      );
    }
  }

  submit() {
    const formData = this.formularioContacto.value;
    this.datos  = JSON.stringify(formData);

    if (this.modoEdicion) {
      this.stockService.updateProduct(this.blockId, formData).subscribe(
        () => {
          this.router.navigate(['/admin']);
        });
    } else {
      this.stockService.createProduct(formData).subscribe(
        () => {
          this.router.navigate(['/admin']);
        });
    }
  }
}