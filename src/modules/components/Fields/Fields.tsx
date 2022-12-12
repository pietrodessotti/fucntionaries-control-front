import { ContentInputStyled, InputStyled, LabelStyled } from "./styled";

type Props = {
  setEvent: (param: string) => void;
  label: string;
  type?: string;
}

/**
 * 
 * @param param0 setEvent
 * @returns retorna o evento digitado no campo
 * 
 * @param param0 label
 * @returns retorna o nome da label
 * 
 * @param param0 label
 * @returns retorna o tipo de input
 * 
 * @export
 * @component
 * @name Fields
 * 
 * @description
 * Responsável por um input 
 */
export const Fields = ({ setEvent, label, type }: Props): JSX.Element => {

  return (
    <ContentInputStyled>
      <LabelStyled>
        {label}:
      </LabelStyled>
      <InputStyled onChange={(event: any) => setEvent(event.target.value)} type={type || 'text'} height={35} />
    </ContentInputStyled>
  )
}
