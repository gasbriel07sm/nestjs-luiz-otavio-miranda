import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecadosModule } from '../recados/recados.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      database: 'postgres',
      password: '123',
      autoLoadEntities: true, // Carrega entidades sem precisar especificá-las
      synchronize: true, // Sincroniza com o Banco de Dados, não deve ser usado em produção
    }),
    RecadosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
