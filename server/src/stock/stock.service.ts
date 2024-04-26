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

  async create(product: Product): Promise<Product> {
      return await this.productModel.create(product);
  }

  async findAll(): Promise<Product[]> { 
    return await this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product | null> {
    return await this.productModel.findById(id).exec();
  }

  async update(id: string, product: Product): Promise<Product> { 
    return await this.productModel.findByIdAndUpdate(id, product, { new: true }).exec();
  }

  async remove(id: string): Promise<Product | null> { 
    return await this.productModel.findByIdAndDelete(id).exec();
  }
}
