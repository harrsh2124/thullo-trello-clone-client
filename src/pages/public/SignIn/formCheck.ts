import isEmail from 'validator/lib/isEmail';
import { ErrorsState, UserDetailsState } from './type';

const formCheck = (userDetails: UserDetailsState) => {
  const errors: ErrorsState = [];
  if (!userDetails.email || !isEmail(userDetails.email)) {
    errors.push('email');
  }

  if (!userDetails.password) {
    errors.push('password');
  }

  return errors;
};

export default formCheck;
