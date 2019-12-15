import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { signUpRequest } from '~/store/modules/auth/actions';

import Button from '~/styles/components/Button';
import { Container, SignForm } from '../styles';

export default function SignUp() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleInputNameChange(event) {
    setName(event.target.value);
  }

  function handleInputEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleInputPassChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Container>
      <SignForm onSubmit={handleSubmit}>
        <h1>Criar conta</h1>

        <span>NOME</span>
        <input name="name" value={name} onChange={handleInputNameChange} />

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

        <Button size="large">Cadastrar</Button>
      </SignForm>
    </Container>
  );
}
