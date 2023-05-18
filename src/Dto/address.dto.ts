import { CityDto } from './city.dto';

export class AddressDto {
  id: number;

  street: string;

  district: string;

  postalcode: number;

  phnumber: number;

  city: CityDto;
}
