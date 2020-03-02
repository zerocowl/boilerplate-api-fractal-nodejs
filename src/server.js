import express from 'express';
import UserAction from './actions/user';
import { data } from '../src/__mocks__/events';
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/users', UserAction.findAll);
app.get('/data', function(req, res) {
  res.send(data);
});

app.listen(process.env.PORT || 3000, function() {
  console.log(`..On PORT: ${process.env.PORT}`);
});
