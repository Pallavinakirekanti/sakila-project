// customer.controller.ts

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from '../Entity/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../Dto/customer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  async getAllCustomers(): Promise<Customer[]> {
    return this.customerService.getAllCustomers();
  }

  @Get(':id')
  async getCustomerById(@Param('id') id: number): Promise<Customer> {
    return this.customerService.getCustomerById(id);
  }

  @Post()
  async createCustomer(
    @Body() customerDto: CreateCustomerDto,
  ): Promise<Customer> {
    return this.customerService.createCustomer(customerDto);
  }

  @Put(':id')
  async updateCustomer(
    @Param('id') id: number,
    @Body() customerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    return this.customerService.updateCustomer(id, customerDto);
  }

  @Delete(':id')
  async deleteCustomer(@Param('id') id: number): Promise<void> {
    return this.customerService.deleteCustomer(id);
  }
}
