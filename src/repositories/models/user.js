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
  password: { type: String },
  user_role: { type: String, required: true },
  verified: { type: Number, required: true },
  verifytoken: { type: String },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date }
});

const UsersModel = db.model('users', userSchema);

export { UsersModel };
