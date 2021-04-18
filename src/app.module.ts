import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './account/account.module';
import { User } from './account/entity/account.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_test',
      entities: [User],
      synchronize: true,
      logging: true,
      migrations: ["migration/*.js"],
      cli: {
          "migrationsDir": "migration"
      }
    }),
    AccountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
