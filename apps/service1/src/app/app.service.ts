import { Injectable } from '@nestjs/common';
import {
  ContentManagerService,
  CreatePayload,
  UpdatePayload,
} from '@nx-with-typia/nest-content-manager';

@Injectable()
export class AppService {
  constructor(private readonly contentManager: ContentManagerService) {}

  list() {
    return this.contentManager.list();
  }

  create(payload: CreatePayload) {
    return this.contentManager.create(payload);
  }

  read(id: string) {
    return this.contentManager.read(id);
  }

  update(id: string, payload: UpdatePayload) {
    return this.contentManager.update(id, payload);
  }

  delete(id: string) {
    return this.contentManager.delete(id);
  }
}
