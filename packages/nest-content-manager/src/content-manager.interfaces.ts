export interface ContentData {
  id: string;
  name: string;
  content: string;
}

export type CreatePayload = Omit<ContentData, 'id'>;

export type UpdatePayload = Partial<CreatePayload>;
