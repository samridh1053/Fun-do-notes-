import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    fname: {
      type: String
    },
    lname: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
