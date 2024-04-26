import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

type Category = 'Clothes' | 'Toys' | 'Sports';

@Schema({
    timestamps: true,
})
export class Product extends Document{
    @Prop({ required: true })
    title: string
    @Prop({ required: true })
    description: string
    @Prop({ required: true })
    stock: number
    @Prop({ required: true })
    price: number
    @Prop({
        required: true,
        validate: {
            validator: function(value) {
                return ['Clothes', 'Toys', 'Sports'].includes(value);
            },
            message: props => `${props.value} is not a valid category!`
        }
    })
    category: Category
}

export const ProductSchema = SchemaFactory.createForClass(Product)