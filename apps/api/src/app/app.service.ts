import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PROVIDE_SERVICE1 } from './app.constants';
import { IApi } from '@nx-with-typia/services-types';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject(PROVIDE_SERVICE1) private readonly service1: ClientProxy
  ) {}

  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  getContentList() {
    return lastValueFrom(this.service1.send('list', {}));
  }

  getContent(id: string) {
    return lastValueFrom(this.service1.send('read', { id }));
  }

  createContent(payload: IApi.IContent.IStore) {
    return lastValueFrom(this.service1.send('create', payload));
  }

  async updateContent(id: string, payload: Partial<IApi.IContent.IStore>) {
    const result = await lastValueFrom(
      this.service1.send('update', { id, update: payload })
    );
    this.throwNotFound(id, result);
    return result;
  }

  async deleteContent(id: string) {
    const result = await lastValueFrom(this.service1.send('delete', { id }));
    this.throwNotFound(id, result);
    return true;
  }

  private throwNotFound(id: string, value: unknown) {
    if (value === null) {
      throw new NotFoundException(`"${id}" Not Found`);
    }
  }
}
