import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

type Category = 'Clothes' | 'Toys' | 'Sports';

@Schema({
    timestamps: true,
})
export class Product extends Document{
    @Prop()
    title: string
    @Prop()
    description: string
    @Prop()
    stock: number
    @Prop()
    price: number
    @Prop()
    category: Category
}

export const ProductSchema = SchemaFactory.createForClass(Product)