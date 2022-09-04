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
    event.preventDefault();
    console.log('Submitting form');

    formCheck(userDetails, setErrors);
    console.log(errors);
  };

  return (
    <div className="signin_container">
      <DisplayMedium className="signin_heading">Sign In</DisplayMedium>
      <form className="signin_form_container" onSubmit={(event) => handleFormSubmission(event)}>
        <FormControl
          error={_.includes(errors, 'email') ? 'Please enter a valid email address.' : null}>
          <Input
            value={userDetails.email}
            onChange={handleFormChange}
            placeholder="Email address"
            id="email"
            error={_.includes(errors, 'email')}
          />
        </FormControl>

        <FormControl
          error={_.includes(errors, 'password') ? 'Please enter a valid password.' : null}>
          <Input
            value={userDetails.password}
            onChange={handleFormChange}
            placeholder="Password"
            id="password"
            type="password"
            error={_.includes(errors, 'password')}
          />
        </FormControl>

        <Button type="submit" className="signin_button">
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

const initialErrorsState: ErrorsState = [];
