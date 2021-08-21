import { setupWorker, rest } from 'msw';
import { delay } from '../commons/utils';
import data from './data.json';

const handlers = [
  rest.get('/meals', async (req, res, ctx) => {
    await delay(500);
    return res(ctx.json(data));
  }),
];

export const worker = setupWorker(...handlers);
