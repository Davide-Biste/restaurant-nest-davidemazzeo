import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() body: any) {
    return this.ordersService.create(body);
  }
  @Get(':tableNum')
  async findAll(@Param('tableNum') tableNum: string) {
    return this.ordersService.getAll(tableNum);
  }
  @Get(':tableNum/future')
  async findAllInFuture(@Param('tableNum') tableNum: string) {
    const currentDate = new Date(Date.now());
    return this.ordersService.getAllInFuture(currentDate, tableNum);
  }
}
