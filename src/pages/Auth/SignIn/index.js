import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import Button from '~/styles/components/Button';
import { Container, SignForm } from '../styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleInputEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleInputPassChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <SignForm onSubmit={handleSubmit}>
        <h1>Bem-vindo</h1>

        <span>E-MAIL</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputEmailChange}
        />

        <span>SENHA</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputPassChange}
        />

        <Button size="large">Entrar</Button>
      </SignForm>
    </Container>
  );
}
