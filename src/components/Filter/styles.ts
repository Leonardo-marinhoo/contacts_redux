import styled from 'styled-components'
import variables from '../../styles/variables'

type Props = {
  isenabled?: boolean
}

export const Card = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  padding: 0.3rem 0.6rem;
  background-color: ${(props) =>
    props.isenabled == true ? 'rgb(44, 44, 44)' : 'transparent'};
  cursor: pointer;
`

export const IconWrapper = styled.div`
  font-size: 1.2rem;
  color: ${variables.icon_white};
`

export const Label = styled.span`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 0.9rem;
  color: rgb(174, 174, 174);
`
