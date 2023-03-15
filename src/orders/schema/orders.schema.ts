import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Dish } from '../../dishes/schema/dishes.schema';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dish' }] })
  dishes: Dish[];

  @Prop({ required: true })
  tableNumber: number;

  @Prop()
  totalPrice: number;

  @Prop({
    default(): any {
      return Date.now();
    },
  })
  creationDate: Date;

  @Prop({
    default(): any {
      return new Date(Date.now() + 1000000);
    },
  })
  deliveryAt: Date;
}

export const OrdersSchema = SchemaFactory.createForClass(Order);
