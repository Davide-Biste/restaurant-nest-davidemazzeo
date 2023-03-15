import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Dish, DishDocument } from './schema/dishes.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DishesService {
  constructor(@InjectModel(Dish.name) private dishModel: Model<DishDocument>) {}
  async findAll(): Promise<Dish[]> {
    return this.dishModel.find();
  }
}
