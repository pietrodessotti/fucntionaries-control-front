import styled from "styled-components";

export const ContentStyled = styled.div`
    /* position: fixed; */

    top: 120px;
    left: 20px;

    width: 30rem;

    display: block;
    align-items: center;
    justify-content: center;
    
    border-right: 4px solid #bab8b8;
    border-top: 4px solid #bab8b8;
    border-top-right-radius: 1rem;
    background-color: #18233f;
    padding: 8rem;
`;

export const LabelStyled = styled.p`
    color: #fff;
    margin: 0 auto;
    text-align: left;

    margin-left: 5px;
    margin-bottom: 1rem;
`;

export const InputStyled = styled.input`
    width: 30rem;
    height: 20px;

    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: auto;
	outline: inherit;

    color: #fff;

    border-bottom: 1px solid gray;
    border-radius: 5px;
`;

export const ContentInputStyled = styled.div`
    display: block;

    margin-bottom: 50px;
`;

type PropsButton = {
    primary?: boolean;
}

export const ButtonStyled = styled.button<PropsButton>`
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	outline: inherit;

    padding: 0.5rem 1rem;
    cursor: pointer;

    color: #fff;
    background-color: ${(props) => props.primary ? '#7d6aca' : '#999'};

    width: 8rem;
`;

export const ContentButtonsStyled = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const LinkStyled = styled.p`
    font-size: 0.8rem;
    margin-top: -2rem;
    margin-left: 5px;

    color: blue;
    display: block;
    text-align: left;
    border-bottom: 1px solid white;
    width: 7.8rem;
`;