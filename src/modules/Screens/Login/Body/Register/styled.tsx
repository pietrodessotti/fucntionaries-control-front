import styled from "styled-components";

export const ContentStyled = styled.div`
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
