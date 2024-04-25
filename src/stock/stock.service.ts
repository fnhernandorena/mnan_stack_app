import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './entities/stock.entity'; 

@Injectable()
export class StockService {
  constructor (
    @InjectModel(Product.name)
    private productModel: Model<Product> 
  ) {}

  create(product: Product): Promise<Product> {
    return this.productModel.create(product);
  }

  findAll(): Promise<Product[]> { 
    return this.productModel.find().exec();
  }

  findOne(id: string): Promise<Product | null> { // Cambiado el tipo de retorno a Promise<Product | null>
    return this.productModel.findById(id).exec();
  }

  update(id: string, product: Product): Promise<Product | null> { // Cambiado el tipo de retorno a Promise<Product | null>
    return this.productModel.findByIdAndUpdate(id, product, { new: true }).exec();
  }

  remove(id: string): Promise<Product | null> { // Cambiado el tipo de retorno a Promise<Product | null>
    return this.productModel.findByIdAndDelete(id).exec();
  }
}
