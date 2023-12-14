import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { PROVIDE_SERVICE1 } from './app.constants';

const clientFactory = ClientProxyFactory.create({
  transport: Transport.TCP,
  options: { port: 3001 },
});

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: PROVIDE_SERVICE1,
      useValue: clientFactory,
    },
    AppService,
  ],
})
export class AppModule {}
