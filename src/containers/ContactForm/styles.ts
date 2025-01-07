import styled from 'styled-components'
import variables from '../../styles/variables'

type InputProps = {
  border?: boolean
}

type RowProps = {
  margin_bottom?: boolean
}

type ButtonProps = {
  type: 'create' | 'edit'
}

export const Form = styled.form`
  width: 55%;
  margin-top: 1.5rem;
`

export const Col = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
`
export const Row = styled.div<RowProps>`
  display: flex;
  width: 100%;
  margin-bottom: ${(props) => (props.margin_bottom ? '2rem' : 0)};
  align-items: center;
`

export const Hr = styled.hr`
  border: none;
  border-bottom: 1px solid ${variables.border_color};
  width: 100%;
  height: 1px;
  margin-left: 0.5rem;
  margin-bottom: 0.3rem;
`

export const Input = styled.input<InputProps>`
  font-family: 'Roboto Mono';
  font-size: 1rem;
  width: 100%;
  border: none;
  border-bottom: ${(props) =>
    props.border ? '1px solid rgb(74, 74, 74)' : 'none'};
  padding: 0.5rem 0.8rem;
  background-color: ${variables.tertiary_dark_bg};
  border-radius: 2px;
  outline: none;
  color: white;

  &:focus {
    transition: 250ms;
    padding-bottom: 0.8rem;
    border-bottom: 2px solid rgb(221, 221, 221);
  }
`
export const Select = styled.select`
  font-family: 'Roboto Mono';
  font-size: 1rem;
  width: 100%;
  border: none;
  padding: 0.5rem 0.8rem;
  background-color: ${variables.tertiary_dark_bg};
  border-radius: 2px;
  outline: none;
  color: white;
`
export const FieldTitle = styled.span`
  display: inline-block;
  color: ${variables.subtitle_primary_dark};
  margin: 0 0.3rem;
  margin-bottom: 0.5rem;
  position: relative;
  white-space: nowrap;
`

export const SubmitBtn = styled.button<ButtonProps>`
  padding: 0.8rem 0;
  width: 100%;
  color: white;
  background-color: ${(props) =>
    props.type === 'create' ? variables.accent_color : variables.alert_color};
  text-transform: uppercase;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`
