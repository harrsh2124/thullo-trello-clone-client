import { Button } from 'baseui/button';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { DisplayMedium } from 'baseui/typography';
import _ from 'lodash';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import formCheck from './formCheck';
import { ErrorsState, UserDetailsState } from './type';

const SignIn = () => {
  const [userDetails, setUserDetails] = useState<UserDetailsState>(initialUserDetailsState);
  const [errors, setErrors] = useState<ErrorsState>(initialErrorsState);
  const [signingUp, setSigningUp] = useState<boolean>(false);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const id = _.get(event, 'target.id');
    const value = _.get(event, 'target.value');

    setUserDetails((prevState) => {
      return {
        ...prevState,
        [id]: value
      };
    });
  };

  const handleFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    setSigningUp(true);
    event.preventDefault();

    const errorResponse = formCheck(userDetails);

    setErrors(errorResponse);
    if (_.isEmpty(errorResponse)) {
      console.log({
        message: 'Signed up successfully.',
        errorResponse
      });
    }
    setSigningUp(false);
  };

  return (
    <div className="signup_container">
      <DisplayMedium className="signup_heading">Sign Up</DisplayMedium>

      <form className="signup_form_container" onSubmit={(event) => handleFormSubmission(event)}>
        <FormControl error={_.has(errors, 'email') ? _.get(errors, 'email') : null}>
          <Input
            value={userDetails.email}
            onChange={handleFormChange}
            placeholder="Email address"
            id="email"
            error={_.has(errors, 'email')}
            autoFocus
            readOnly={signingUp}
          />
        </FormControl>

        <FormControl error={_.has(errors, 'password') ? _.get(errors, 'password') : null}>
          <Input
            value={userDetails.password}
            onChange={handleFormChange}
            placeholder="Password"
            id="password"
            type="password"
            error={_.has(errors, 'password')}
            readOnly={signingUp}
          />
        </FormControl>

        <FormControl
          error={
            _.has(errors, 'confirmationPassword') ? _.get(errors, 'confirmationPassword') : null
          }>
          <Input
            value={userDetails.confirmationPassword}
            onChange={handleFormChange}
            placeholder="Confirm password"
            id="confirmationPassword"
            type="password"
            error={_.has(errors, 'confirmationPassword')}
            readOnly={signingUp}
          />
        </FormControl>

        <FormControl error={_.has(errors, 'contactNumber') ? _.get(errors, 'contactNumber') : null}>
          <Input
            value={userDetails.contactNumber}
            onChange={handleFormChange}
            placeholder="Contact number"
            id="contactNumber"
            error={_.has(errors, 'contactNumber')}
            startEnhancer="+91"
            readOnly={signingUp}
          />
        </FormControl>

        <Button type="submit" className="signup_button" disabled={signingUp}>
          Sign Up
        </Button>
      </form>

      <div className="signin_text">
        <p>Already have an account?</p>
        <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
};

export default SignIn;

const initialUserDetailsState: UserDetailsState = {
  email: '',
  password: '',
  confirmationPassword: '',
  contactNumber: ''
};

const initialErrorsState: ErrorsState = {};
