import styled from "styled-components";

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
