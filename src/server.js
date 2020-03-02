import express from 'express';
import UserAction from './actions/user';
import { db } from './repositories/index';

const app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/users', UserAction.findAll);

app.listen(process.env.PORT || 3000, function() {
  console.log(`..On PORT: ${process.env.PORT}`);
});
