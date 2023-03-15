import { Body, Controller, Post, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import _ from 'lodash';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() body: any) {
    return this.ordersService.create(body);
  }
  @Get()
  async findAll() {
    return this.ordersService.getAll();
  }
}
