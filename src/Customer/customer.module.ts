import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Customer } from '../Entity/customer.entity';

import { Address } from '../Entity/address.entity';

import { City } from '../Entity/city.entity';
import { Country } from 'src/Entity/country.entity';

// import { Country } from 'src/country/country.entity';

import { CustomerController } from '../Customer/customer.controller';

import { CustomerService } from '../Customer/customer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Address, City, Country])],

  controllers: [CustomerController],

  providers: [CustomerService],
})
export class CustomersModule {}
