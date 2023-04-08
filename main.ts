//@deno-types="npm:express"
import express from 'npm:express';

const app = express();

app.get('/', (_req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Hello World!');
});

app.listen(6969, () => {
  console.log('Example app listening on port 6969!');
});

