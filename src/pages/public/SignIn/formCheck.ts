import isEmail from 'validator/lib/isEmail';
import { ErrorsState, UserDetailsState } from './type';

const formCheck = (
  userDetails: UserDetailsState,
  setErrors: React.Dispatch<React.SetStateAction<ErrorsState>>
) => {
  const errors: ErrorsState = [];
  console.log('Checking form');
  if (!userDetails.email || !isEmail(userDetails.email)) {
    errors.push('email');
  }

  if (!userDetails.password) {
    errors.push('password');
  }

  setErrors(errors);
};

export default formCheck;
