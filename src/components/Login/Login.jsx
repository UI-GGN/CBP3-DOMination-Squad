import { primary, dark } from '../colors.json';
import { validateCredentials } from '../common/utils';
import { useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  SignInSection,
  SignUpSection,
  SignInSegment,
  SignInTitle,
  StyledTextField,
  Button,
  AlertText,
} from './Login.style';

const Login = () => {
  const signIn = useSignIn();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(null);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(null);
  };

  const validateEmail = () => {
    var re = /\S+@\S+\.\S+/;
    const isEmailValid = re.test(email);

    if (isEmailValid) {
      setEmailError(null);
      return true;
    } else {
      setEmailError(true);
      return false;
    }
  };

  const validatePassword = () => {
    if (password !== '') {
      setPasswordError(null);
      return true;
    } else {
      setPasswordError(true);
      return false;
    }
  };

  const handleOnSubmit = () => {
    if (validateEmail() && validatePassword()) {
      const result = validateCredentials(email, password);
      if (result?.isUserValid) {
        localStorage.setItem('authToken', result?.type);
        signIn({
          token: 'someToken',
          expiresIn: 3600,
        });

        navigate('/');
      } else {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      }
    }
  };

  return (
    <>
      <Container>
        <SignInSection>
          <SignInSegment>
            <SignInTitle>Sign In</SignInTitle>
            <StyledTextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleEmailChange}
              error={emailError}
              helperText={emailError ? 'Please provide a valid email' : null}
            />
            <StyledTextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
              error={passwordError}
              helperText={passwordError ? 'Password field cannot be empty' : null}
            />

            <Button color={primary} onClick={() => handleOnSubmit()}>
              Sign in
            </Button>
            {showAlert && <AlertText>Please enter valid credentials !</AlertText>}
          </SignInSegment>
        </SignInSection>
        <SignUpSection>
          <div className="w-full h-full bg-landing_image bg-cover bg-no-repeat">
            <div className="w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center">
              <div className="text-white font-bold text-6xl mb-8">New Here?</div>
              <p className="text-white text-xl m-8">
                Effortless Commutes: Sign Up Now for Hassle-Free Office Cab Booking!
              </p>
              <Button color="white" bgColor={dark}>
                Sign up
              </Button>
            </div>
          </div>
        </SignUpSection>
      </Container>
    </>
  );
};

export default Login;
