import { Controller, Get, Post, Body, Param, Delete, Put, HttpException, HttpStatus } from '@nestjs/common';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Post()
  async create(@Body() product) {
    try {
    return await this.stockService.create(product);
  } catch (error: any)  {
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map((err: any) => err.message);
      throw new HttpException({ message: 'Error de validación', errors: validationErrors }, HttpStatus.BAD_REQUEST);
    } else {
      throw new HttpException({ message: 'Ha ocurrido un error interno del servidor.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    } }
  }

  @Get()
  findAll() {
    return this.stockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() product) {
  try{
    return this.stockService.update(id, product);
  } catch (error: any)  {
    console.log(error)
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map((err: any) => err.message);
      throw new HttpException({ message: 'Error de validación', errors: validationErrors }, HttpStatus.BAD_REQUEST);
    } else {
      throw new HttpException({ message: 'Ha ocurrido un error interno del servidor.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    } }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockService.remove(id);
  }
}
