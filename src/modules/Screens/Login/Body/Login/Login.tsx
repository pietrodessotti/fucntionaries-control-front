import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { ButtonStyled, ContentButtonsStyled, ContentInputStyled, ContentStyled, InputStyled, LabelStyled, LinkStyled } from "./styled";
import Fields from "../../../../components/Fields";

type Props = {
  setTab: (param: string) => void;
}

export const Login = ({ setTab }: Props): JSX.Element => {
  const [response, setResponse] = useState<string>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = useNavigate();

  const getAPI = async () => {
    const url = 'http://localhost:8001/auth/login';

    axios.post(url, {
      email: email,
      password: password,
    }).then((response) => {
      try {
        console.log('passou aqui')
        redirect('/minha-conta')
        setResponse(response)
      } catch (error) {
        console.log('passou aqui2')
        setResponse(response)
      }
    });
  };

  console.log(response)

  const handleLogin = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    getAPI();
  }

  return (
    <form onSubmit={handleLogin}>
      <ContentStyled>
        <Fields label="Email" setEvent={setEmail} />
        <ContentInputStyled>
          <Fields label="Senha" setEvent={setPassword} type="password" />

          <LinkStyled>
            <a href="/">
              Esqueci minha senha
            </a>
          </LinkStyled>
        </ContentInputStyled>

        <ContentButtonsStyled>
          <ButtonStyled type="button" onClick={() => setTab('Register')}>
            Cadastrar
          </ButtonStyled>
          <ButtonStyled type="submit" primary>
            Entrar
          </ButtonStyled>
        </ContentButtonsStyled>
      </ContentStyled>
    </form>
  )
}
