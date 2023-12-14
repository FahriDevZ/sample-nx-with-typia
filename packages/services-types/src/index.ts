import { tags } from 'typia';

export namespace IServices {
  export namespace IService1 {
    export interface IGetPayload {
      id: string & tags.Format<'uuid'>;
    }

    export interface IUpdatePayload {
      id: string & tags.Format<'uuid'>;
      update: Partial<IApi.IContent.IStore>;
    }
  }
}

export namespace IApi {
  export interface IContent extends IContent.IStore {
    id: string & tags.Format<'uuid'>;
  }

  export namespace IContent {
    export interface IParams {
      id: string & tags.Format<'uuid'>;
    }

    export interface IStore {
      name: string & tags.MinLength<3> & tags.MaxLength<255>;
      content: string;
    }
  }
}
