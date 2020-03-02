import { db } from '../index';

const userSchema = db.Schema({
  _id: db.Schema.Types.ObjectId,
  name: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
  },
  password: { type: String }
});

const UsersModel = db.model('users', userSchema);

export { UsersModel };
