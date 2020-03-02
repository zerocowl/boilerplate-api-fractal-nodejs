import mongoose from 'mongoose';

mongoose.set('useCreateIndex', true);

const dbPath =
  process.env.DATABASE_URI ||
  `mongodb://zero:123zero@ds363058.mlab.com:63058/data_reports`;

mongoose.connect(dbPath, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const conn = mongoose.connection;
conn.on('error', () => {
  console.log('> error occurred from the database');
});
conn.once('open', () => {
  console.log('> successfully opened the database');
});

export { mongoose as db };
