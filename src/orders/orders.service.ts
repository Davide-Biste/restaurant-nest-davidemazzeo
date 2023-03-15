import { Injectable } from '@nestjs/common';
import { Order, OrderDocument } from './schema/orders.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dish, DishDocument } from '../dishes/schema/dishes.schema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    @InjectModel(Dish.name) private dishModel: Model<DishDocument>,
  ) {}

  async create(body: any): Promise<Order> {
    const { dishes } = body;
    const price = await this.dishModel.find({ _id: dishes });
    const sumTotalPrice = price.reduce((accumulator, current) => {
      return accumulator + current.price;
    }, 0);
    const createOrder = new this.orderModel({
      ...body,
      totalPrice: sumTotalPrice,
    });
    return createOrder.save();
  }
  async getAll(tableNum: any): Promise<Order[]> {
    return this.orderModel.find({ tableNumber: tableNum }).populate('dishes');
  }
}
