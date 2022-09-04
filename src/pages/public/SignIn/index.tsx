import { Button } from 'baseui/button';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { DisplayMedium } from 'baseui/typography';
import _ from 'lodash';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import formCheck from './formCheck';
import { ErrorsState, UserDetailsState } from './type';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const SignIn = () => {
  const [userDetails, setUserDetails] = useState<UserDetailsState>(initialUserDetailsState);
  const [errors, setErrors] = useState<ErrorsState>(initialErrorsState);
  const [signingIn, setSigningIn] = useState<boolean>(false);

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

  const handleFormSubmission = async (event: React.FormEvent<HTMLFormElement>) => {
    setSigningIn(true);
    event.preventDefault();

    await delay(5000);

    const errorResponse = formCheck(userDetails);

    setErrors(errorResponse);
    if (_.isEmpty(errorResponse)) {
      console.log({
        message: 'Signed in successfully.',
        errorResponse
      });
    }
    setSigningIn(false);
  };

  return (
    <div className="signin_container">
      <DisplayMedium className="signin_heading">Sign In</DisplayMedium>

      <form className="signin_form_container" onSubmit={(event) => handleFormSubmission(event)}>
        <FormControl error={_.has(errors, 'email') ? _.get(errors, 'email') : null}>
          <Input
            value={userDetails.email}
            onChange={handleFormChange}
            placeholder="Email address"
            id="email"
            error={_.has(errors, 'email')}
            autoFocus
            readOnly={signingIn}
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
            readOnly={signingIn}
          />
        </FormControl>

        <Button type="submit" className="signin_button" disabled={signingIn}>
          Sign In
        </Button>
      </form>

      <div className="signup_text">
        <p>Don&#39;t have an account?</p>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default SignIn;

const initialUserDetailsState: UserDetailsState = {
  email: '',
  password: ''
};

const initialErrorsState: ErrorsState = {};
