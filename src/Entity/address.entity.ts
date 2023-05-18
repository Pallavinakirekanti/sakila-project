// address.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { City } from './city.entity';
import { Country } from './country.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  district: string;

  @Column()
  postalcode: number;

  @Column()
  phnumber: string;

  @OneToOne(() => City)
  @JoinColumn()
  city: City;

  @OneToOne(() => Country)
  @JoinColumn()
  country: Country;
  countryId: number;
  cityId: number;
}
