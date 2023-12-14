import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
import { IApi } from '@nx-with-typia/services-types';
import { tags } from 'typia';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @TypedRoute.Get()
  getData() {
    return this.appService.getData();
  }

  @TypedRoute.Get('contents')
  getContentList(): Promise<IApi.IContent[]> {
    return this.appService.getContentList();
  }

  @TypedRoute.Get('contents/:id')
  getContent(
    @TypedParam('id') id: string & tags.Format<'uuid'>
  ): Promise<IApi.IContent | null> {
    return this.appService.getContent(id);
  }

  @TypedRoute.Post('contents')
  createContent(
    @TypedBody() payload: IApi.IContent.IStore
  ): Promise<IApi.IContent> {
    return this.appService.createContent(payload);
  }

  @TypedRoute.Put('contents/:id')
  updateContent(
    @TypedParam('id') id: string & tags.Format<'uuid'>,
    @TypedBody() payload: Partial<IApi.IContent.IStore>
  ): Promise<IApi.IContent | null> {
    return this.appService.updateContent(id, payload);
  }

  @TypedRoute.Delete('contents/:id')
  deleteContent(
    @TypedParam('id') id: string & tags.Format<'uuid'>
  ): Promise<boolean> {
    return this.appService.deleteContent(id);
  }
}
