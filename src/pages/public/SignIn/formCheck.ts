import isEmail from 'validator/lib/isEmail';
import { ErrorsState, UserDetailsState } from './type';

const formCheck = (userDetails: UserDetailsState) => {
  const errors: ErrorsState = {};

  if (!userDetails.email || !isEmail(userDetails.email)) {
    errors['email'] = 'Please enter a valid email address.';
  }

  if (!userDetails.password) {
    errors['password'] = 'Please enter a password.';
  }

  return errors;
};

export default formCheck;
