import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import { ErrorsState, UserDetailsState } from './type';

const formCheck = (userDetails: UserDetailsState) => {
  const errors: ErrorsState = {};

  if (!userDetails.email || !isEmail(userDetails.email)) {
    errors['email'] = 'Please enter a valid email address.';
  }

  if (!userDetails.password) {
    errors['password'] = 'Please enter a password.';
  }

  if (!userDetails.confirmationPassword) {
    errors['confirmationPassword'] = 'Please enter a confirmation password.';
  }

  if (userDetails.confirmationPassword !== userDetails.password) {
    errors['confirmationPassword'] = 'Please match passwords.';
  }

  if (!userDetails.contactNumber || !isMobilePhone(userDetails.contactNumber, 'en-IN')) {
    errors['contactNumber'] = 'Please enter a valid contact number.';
  }

  return errors;
};

export default formCheck;
