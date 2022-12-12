import React from "react";
import { useNavigate  } from 'react-router-dom'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

import { ButtonReturnStyled, HeaderContentStyled, TypographyStyled } from "./styled";

export const Header = (): JSX.Element => {
  const redirect = useNavigate();

  const handleLogin = () => {
    redirect('/')

    console.log('passou nese aqui')
  }

  return (
    <HeaderContentStyled>
      <ButtonReturnStyled onClick={handleLogin}>
        <ArrowCircleLeftOutlinedIcon style={{ cursor: 'pointer' }} fontSize="large" color="primary" />
        <TypographyStyled>
          Retornar a página inicial
        </TypographyStyled>
      </ButtonReturnStyled>
    </HeaderContentStyled>
  );
};