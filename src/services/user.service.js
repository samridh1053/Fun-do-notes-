import User from '../models/user.model';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";



//create new user (Registration)
export const newUser = async (body) => {
  body.password = await bcrypt.hash(body.password,11)
  const data1=await User.findOne({email:body.email});
  if(!data1){
    const data = await User.create(body);
  return data;
  }
  else
  throw new Error("Email already present");
};

//get single user (Login)
export const getUser = async (body) => {
  const data = await User.findOne({email:body.email});
  if(!data){
    throw new Error("Email not found");
  }

  const match = await bcrypt.compare(body.password,data.password)
  if(match){
    var token = jwt.sign({ foo: 'bar' },  process.env.JWT_SECRET_KEY);
    return token; 
  }else{
    throw new Error("invalid password")
  }

  return data;
};

// export const authenticate = async (body) => {
//   try {
//       const user = await User.findOne({ email: body.email });
//       if (!user) {
//           throw new Error('Invalid Email');
//       }

//       const isMatch = await bcrypt.compare(body.password, user.password);

//       if (isMatch) {
//           const token = jwt.sign({ userId: user._id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });
//           return { token, userId: user._id };
//       }

//       throw new Error('Invalid Password');
//   } catch (error) {
//       throw error;
//     }
// };
