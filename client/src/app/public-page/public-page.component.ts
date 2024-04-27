import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock-service.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-public-page',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './public-page.component.html',
  styleUrl: './public-page.component.css'
})
export class PublicPageComponent implements OnInit{

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
}
