import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { IApi, IServices } from '@nx-with-typia/services-types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('list')
  list() {
    return this.appService.list();
  }

  @MessagePattern('create')
  create(@Payload() payload: IApi.IContent.IStore) {
    return this.appService.create(payload);
  }

  @MessagePattern('read')
  read(@Payload() payload: IServices.IService1.IGetPayload) {
    return this.appService.read(payload.id);
  }

  @MessagePattern('update')
  update(@Payload() payload: IServices.IService1.IUpdatePayload) {
    return this.appService.update(payload.id, payload.update);
  }

  @MessagePattern('delete')
  delete(@Payload() payload: IServices.IService1.IGetPayload) {
    return this.appService.delete(payload.id);
  }
}
