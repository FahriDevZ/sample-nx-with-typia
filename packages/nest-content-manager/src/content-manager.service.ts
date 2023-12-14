import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import {
  ContentData,
  CreatePayload,
  UpdatePayload,
} from './content-manager.interfaces';

@Injectable()
export class ContentManagerService {
  data = new Map<string, ContentData>();

  list() {
    return Array.from(this.data.values());
  }

  create(payload: CreatePayload): ContentData {
    const id = uuidv4();
    const data = { id, ...payload };
    this.data.set(id, data);
    return data;
  }

  read(id: string) {
    const data = this.data.get(id);
    if (!data) return null;
    return data;
  }

  update(id: string, payload: UpdatePayload): ContentData | null {
    const data = this.read(id);

    if (data) {
      // strict type check for keys
      const isContentDataKey = (key: string): key is keyof ContentData => {
        return key in data;
      };

      // update current data from payload for non-null and non-undefined values
      for (const [key, value] of Object.entries(payload)) {
        if (isContentDataKey(key) && value != null) {
          data[key] = value;
        }
      }

      this.data.set(id, data);
    }
    return data;
  }

  delete(id: string) {
    return this.data.delete(id);
  }
}
