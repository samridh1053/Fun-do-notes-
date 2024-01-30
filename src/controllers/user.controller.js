import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';



// for login
export const getUser = async (req, res, next) => {
  try {
    const data = await UserService.getUser(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      token: data,
      message: 'User fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};
// export const login = async (req, res, next) => {
//   try {
//       const { token, userId } = await UserService.authenticate(req.body);
//       res.status(HttpStatus.OK).json({ message: 'Login successful', token, userId });
//   } catch (error) {
//       res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Login failed: ' + error.message });
//     }
// };

// for registration
export const newUser = async (req, res, next) => {
  try {
    const data = await UserService.newUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  } catch (error) {
    next(error);
  }
};

