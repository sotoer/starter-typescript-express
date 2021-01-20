import express from 'express';
import { rootHandler, helloHandler } from './handlers';

const app = express();

app.get('/', rootHandler);
app.get('/hello/:name', helloHandler);

export default app;
