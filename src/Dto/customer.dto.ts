// import { AddressDto } from './address.dto';

// export class CustomerDto {
//   id: number;

//   first_name: string;

//   last_name: string;

//   //profile_pic: string;

//   email: string;

//   //   address: AddressDto;
//   //   customerDto: { id: number; street: string };
// }
// customer.dto.ts

// import { IsString, IsEmail, IsInt, IsOptional } from 'class-validator';

export class CreateCustomerDto {
  first_name: string;

  last_name: string;

  email: string;

  street: string;

  district: string;

  postalcode: number;

  phnumber: string;

  cityId: number;

  countryId: number;
}

export class UpdateCustomerDto {
  first_name?: string;

  last_name?: string;

  email?: string;

  street?: string;

  district?: string;

  postalcode?: number;

  phnumber?: string;

  cityId?: number;

  countryId?: number;
}
