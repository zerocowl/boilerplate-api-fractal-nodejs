import mongoose from 'mongoose';

const connectDB = () => {
  return mongoose.connect(
    process.env.DATABASE_URI ||
      `mongodb://zero:123zero@ds363058.mlab.com:63058/data_reports`
  );
};
const test = () => console.log(`tes`);

export { connectDB, test };
