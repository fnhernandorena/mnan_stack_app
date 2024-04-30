import { Component } from '@angular/core';
import { StockService } from '../services/stock-service.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  constructor (private stockService: StockService){}
  stock: any;
 ngOnInit(): void {
   this.getStock();
 }
  getStock() {
   this.stockService.getProducts().subscribe((data: any) => {
     this.stock = data;
   });
 }
 deleteProduct(id: string) {
  this.stockService.deleteProduct(id).subscribe(() => {
     this.getStock();
  });
}
}
