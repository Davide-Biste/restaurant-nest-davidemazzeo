import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrdersSchema } from './schema/orders.schema';
import { Dish, DishesSchema } from '../dishes/schema/dishes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrdersSchema }]),
    MongooseModule.forFeature([{ name: Dish.name, schema: DishesSchema }]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
