import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:3000/stock');
  }
  createProduct(data:any){
    return this.http.post('http://localhost:3000/stock', data);
  }
  deleteProduct(id:string){
    return this.http.delete(`http://localhost:3000/stock/${id}`);
  }
  getProduct(id:string){
    return this.http.get(`http://localhost:3000/stock/${id}`);
  }
  updateProduct(id:string, data:any){
    return this.http.put(`http://localhost:3000/stock/${id}`, data);
  }
}
