import React, { useEffect, useState } from "react";
import axios from 'axios';

import { ButtonStyled, ContentButtonsStyled, ContentInputStyled, ContentStyled, InputStyled, LabelStyled, LinkStyled, WrapperStyled } from "./styled";
import TranslateMessageError from "../../../../utils/translateMessageError";
import Register from "./Register";
import Login from "./Login";

type PropsResponse = {
  msg: string
}

export const Body = (): JSX.Element => {
  const [tab, setTab] = useState('Login');
  // const formattedMessage = response && TranslateMessageError(response)

  // console.log(formattedMessage)

  return (
    <WrapperStyled>
      {tab === 'Login' ? (
        <Login setTab={setTab} />
      ) : (
        <Register setTab={setTab} />
      )}
    </WrapperStyled>
  )
}
