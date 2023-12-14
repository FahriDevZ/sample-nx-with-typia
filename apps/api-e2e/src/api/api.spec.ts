import axios from 'axios';

beforeAll(() => {
  axios.defaults.baseURL = 'http://localhost:3000/api';
});

describe('GET /api/contents', () => {
  it('should success create content', async () => {
    const createData = { name: 'name1', content: 'content1' };
    const res = await axios.post(`/contents`, createData);

    expect(res.status).toBe(201);
    expect(res.data).toEqual({
      ...createData,
      id: expect.any(String),
    });
  });

  it('should fail create content missing name', async () => {
    const createData = { content: 'content1' };
    const res = await axios.post(`/contents`, createData, {
      // ignore error
      validateStatus: () => true,
    });
    expect(res.status).toBe(400);
    expect(res.data).toEqual(
      expect.objectContaining({
        path: '$input.name',
      })
    );
  });
});
