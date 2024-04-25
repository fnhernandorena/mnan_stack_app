import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entities/stock.entity';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    ],
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
