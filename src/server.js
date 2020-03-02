import express from 'express';
import UserAction from './actions/user';
import { connectDB } from './repositories/index';

const app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/users', UserAction.findAll);
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, function() {
      console.log(`..On PORT: ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('App starting error:', err.stack);
    process.exit(1);
  });
