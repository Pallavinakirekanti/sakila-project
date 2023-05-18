import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Customer } from './Entity/customer.entity';
import { Address } from './Entity/Address.Entity';
import { City } from './Entity/city.entity';
import { Country } from './Entity/country.entity';
import { CustomersModule } from './Customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',

      username: 'root',

      host: 'localhost',

      // port:3306,

      password: 'password',

      database: 'sakila1',

      entities: [Customer, Address, City, Country],

      autoLoadEntities: true,

      synchronize: true,
    }),

    CustomersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
