import { Module } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { DishesController } from './dishes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Dish, DishesSchema } from './schema/dishes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dish.name, schema: DishesSchema }]),
  ],
  controllers: [DishesController],
  providers: [DishesService],
})
export class DishesModule {}
