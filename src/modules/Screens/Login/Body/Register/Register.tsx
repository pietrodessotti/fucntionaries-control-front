import React, { useEffect, useState } from "react";
import axios from 'axios';

import { ButtonStyled, ContentButtonsStyled, ContentStyled } from "./styled";
import Fields from "../../../../components/Fields";

type Props = {
  setTab: (param: string) => void;
}
export const Register = ({ setTab }: Props): JSX.Element => {
  const [response, setResponse] = useState<string>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState('');
  const [area, setArea] = useState('');
  const [profession, setProfession] = useState('');

  const getAPI = async () => {
    const url = 'http://localhost:8001/auth/register';

    axios.post(url, {
      email: email,
      password: password,
      name: name,
      lastName: lastName,
      confirmPassword: confirmPassword,
      age: age,
      area: area,
      profession: profession,
    }).then((response) => {
      try {
        console.log('passou aqui')
        setResponse(response)
      } catch (error) {
        console.log('passou aqui2')
        setResponse(response)
      }
    });
  };

  const handleRegister = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    getAPI();
  }

  return (
    <form onSubmit={handleRegister}>
      <ContentStyled>
          <Fields label="Nome" setEvent={setName} />
          <Fields label="Sobrenome" setEvent={setLastName} />
          <Fields label="Idade" setEvent={setAge} />

          <Fields label="Senha" setEvent={setPassword} type="password" />
          <Fields label="Confirmar senha" setEvent={setConfirmPassword} type="password" />

          <Fields label="Email" setEvent={setEmail} />
          <Fields label="Área" setEvent={setArea} />
          <Fields label="Profissão" setEvent={setProfession} />
        <ContentButtonsStyled>
          <ButtonStyled type="button" onClick={() => setTab('Login')}>
            Voltar
          </ButtonStyled>
          <ButtonStyled type="submit" primary>
            Confirmar
          </ButtonStyled>
        </ContentButtonsStyled>
      </ContentStyled>
    </form>
  )
}
