import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { LoginData } from 'api';
import { Paths } from 'routes';
import { useUniqueids } from 'hooks';
import { Footer, Main } from 'components/layouts';
import { Button, Input } from 'components/partials';

const LoginWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  margin: 0 auto;
`;

const Form = styled.form`
  margin: 2rem auto;
  width: 100%;

  & > * {
    margin: 5px auto;
    width: 100%;
  }
`;

const Fieldset = styled.fieldset`
  border-radius: 12px;
  transition: all 0.4s ease-out;

  &:hover {
    border-color: #cfcfcf;
    box-shadow: 0 0 0 3px rgba(34, 31, 31, 0.25);
  }
`;

const Legend = styled.legend`
  color: #727272;
  font-size: 0.7rem;
`;

const Heading = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

const Message = styled.p`
  text-align: center;
`;

const HaveAccountNode = styled.p`
  text-align: center;
  font-size: 0.9rem;
`;

const initialLoginData = {
  email: '',
  password: '',
};

const SignUp: React.FC = () => {
  const [emailId, passwordId] = useUniqueids(2);
  const [loginData, setLoginData] = useState<LoginData>(initialLoginData);

  return (
    <LoginWrapper>
      <Main>
        <Heading>Sign in</Heading>
        <Message>Enter your credentials lets continue</Message>
        <Form
          onSubmit={(ev: React.KeyboardEvent<HTMLFormElement>) => {
            ev.preventDefault();
            console.log(loginData);
          }}
        >
          <Fieldset>
            <Legend>Email</Legend>
            <Input
              id={emailId}
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
                setLoginData({ ...loginData, email: value });
              }}
              required
            />
          </Fieldset>
          <Fieldset>
            <Legend>Password</Legend>
            <Input
              id={passwordId}
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
                setLoginData({ ...loginData, password: value });
              }}
              required
            />
          </Fieldset>
          <Button type="submit" shape="radius">
            Sign in
          </Button>
          <HaveAccountNode>
            Don&apos;t Have an Account?&nbsp;
            <Link className="link" to={Paths.signUp}>
              Sign up
            </Link>
          </HaveAccountNode>
        </Form>
      </Main>

      <Footer />
    </LoginWrapper>
  );
};

export default SignUp;
