// // customer.service.ts

// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Customer } from '../Entity/customer.entity';
// import { CreateCustomerDto, UpdateCustomerDto } from '../Dto/customer.dto';
// import { Address } from 'src/Entity/address.entity';

// @Injectable()
// export class CustomerService {
//   constructor(
//     @InjectRepository(Customer)
//     private customerRepository: Repository<Customer>,
//   ) {}

//   async getAllCustomers(): Promise<Customer[]> {
//     return this.customerRepository.find();
//   }

//   async getCustomerById(id: any): Promise<Customer> {
//     return this.customerRepository.findOne(id);
//   }

//   async createCustomer(customerDto: CreateCustomerDto): Promise<Customer> {
//     const customer = new Customer();
//     customer.first_name = customerDto.first_name;
//     customer.last_name = customerDto.last_name;
//     customer.email = customerDto.email;

//     // Create address object
//     const address = new Address();
//     address.street = customerDto.street;
//     address.district = customerDto.district;
//     address.postalcode = customerDto.postalcode;
//     address.phnumber = customerDto.phnumber;

//     // Set the city and country IDs
//     address.cityId = customerDto.cityId;
//     address.countryId = customerDto.countryId;

//     // Set the address object in the customer entity
//     customer.address = address;

//     return this.customerRepository.save(customer);
//   }

//   async updateCustomer(
//     id: any,
//     customerDto: UpdateCustomerDto,
//   ): Promise<Customer> {
//     const customer = await this.customerRepository.findOne(id);

//     if (!customer) {
//       throw new Error('Customer not found');
//     }

//     // Update customer properties if provided in the DTO
//     if (customerDto.first_name) {
//       customer.first_name = customerDto.first_name;
//     }

//     if (customerDto.last_name) {
//       customer.last_name = customerDto.last_name;
//     }

//     if (customerDto.email) {
//       customer.email = customerDto.email;
//     }

//     // Update address properties if provided in the DTO
//     if (customerDto.street) {
//       customer.address.street = customerDto.street;
//     }

//     if (customerDto.district) {
//       customer.address.district = customerDto.district;
//     }

//     if (customerDto.postalcode) {
//       customer.address.postalcode = customerDto.postalcode;
//     }

//     if (customerDto.phnumber) {
//       customer.address.phnumber = customerDto.phnumber;
//     }

//     // Update the city and country IDs if provided in the DTO
//     if (customerDto.cityId) {
//       customer.address.cityId = customerDto.cityId;
//     }

//     if (customerDto.countryId) {
//       customer.address.countryId = customerDto.countryId;
//     }

//     return this.customerRepository.save(customer);
//   }

//   async deleteCustomer(id: number): Promise<void> {
//     await this.customerRepository.delete(id);
//   }
// }
// customer.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../Entity/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../Dto/customer.dto';
import { Address } from 'src/Entity/address.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async getAllCustomers(): Promise<Customer[]> {
    const customers = await this.customerRepository
      .createQueryBuilder('customer')
      .leftJoinAndSelect('customer.address', 'address')
      .leftJoinAndSelect('address.city', 'city')
      .leftJoinAndSelect('address.country', 'country')
      .getMany();

    if (customers.length === 0) {
      throw new Error('No customers found');
    }

    return customers;
  }

  async getCustomerById(id: any): Promise<Customer> {
    const customer = await this.customerRepository
      .createQueryBuilder('customer')
      .leftJoinAndSelect('customer.address', 'address')
      .leftJoinAndSelect('address.city', 'city')
      .leftJoinAndSelect('address.country', 'country')
      .where('customer.id = :id', { id })
      .getOne();

    if (!customer) {
      throw new Error('Customer not found');
    }

    return customer;
  }

  // async getCustomerById(id: any): Promise<Customer> {
  //   return this.customerRepository.findOne(id);
  // }

  async createCustomer(customerDto: CreateCustomerDto): Promise<Customer> {
    const customer = new Customer();
    customer.first_name = customerDto.first_name;
    customer.last_name = customerDto.last_name;
    customer.email = customerDto.email;

    // Create address object
    const address = new Address();
    address.street = customerDto.street;
    address.district = customerDto.district;
    address.postalcode = customerDto.postalcode;
    address.phnumber = customerDto.phnumber;

    // Set the city and country IDs
    address.cityId = customerDto.cityId;
    address.countryId = customerDto.countryId;

    // Set the address object in the customer entity
    customer.address = address;

    return this.customerRepository.save(customer);
  }

  async updateCustomer(
    id: any,
    customerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    const customer = await this.customerRepository.findOne(id);

    if (!customer) {
      throw new Error('Customer not found');
    }

    // Update customer properties if provided in the DTO
    if (customerDto.first_name) {
      customer.first_name = customerDto.first_name;
    }

    if (customerDto.last_name) {
      customer.last_name = customerDto.last_name;
    }

    if (customerDto.email) {
      customer.email = customerDto.email;
    }

    // Update address properties if provided in the DTO
    if (customerDto.street) {
      customer.address.street = customerDto.street;
    }

    if (customerDto.district) {
      customer.address.district = customerDto.district;
    }

    if (customerDto.postalcode) {
      customer.address.postalcode = customerDto.postalcode;
    }

    if (customerDto.phnumber) {
      customer.address.phnumber = customerDto.phnumber;
    }

    // Update the city and country IDs if provided in the DTO
    if (customerDto.cityId) {
      customer.address.cityId = customerDto.cityId;
    }

    if (customerDto.countryId) {
      customer.address.countryId = customerDto.countryId;
    }

    return this.customerRepository.save(customer);
  }

  async deleteCustomer(id: number): Promise<void> {
    await this.customerRepository.delete(id);
  }
}
