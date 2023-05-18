// country.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  country: string;
}
