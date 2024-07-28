import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ProdutoModule } from './produto/produto.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DbModule, ProdutoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
