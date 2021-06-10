import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [
      UserModule,
      AuthModule,
      TypeOrmModule.forRoot({
          type: 'sqlite',
          database: 'db',
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
      }),
      ExpensesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
