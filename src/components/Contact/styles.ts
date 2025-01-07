import styled from 'styled-components'
import variables from '../../styles/variables'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 9fr 9fr 2fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  width: 100%;
  margin-bottom: 2rem;
  border-bottom: 2px solid ${variables.border_color};
`

export const Thumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.3rem;
  border-radius: 50%;
  font-size: 0.9rem;
  font-family: 'Manrope';
  font-weight: bold;
  width: 2rem;
  height: 2rem;
  background-color: ${variables.secondary_dark_bg};
  color: rgb(119, 119, 119);
  white-space: nowrap;
  text-transform: uppercase;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 0.5rem;
`
export const Title = styled.a`
  color: ${variables.text_primary_dark};
`

export const Subtitle = styled.a`
  color: ${variables.subtitle_primary_dark};
`

export const EditBtn = styled(Link)`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${variables.subtitle_primary_dark};
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    transition: 200ms;
    color: ${variables.text_primary_dark};
  }
`
export const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${variables.subtitle_primary_dark};
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    transition: 200ms;
    color: rgb(187, 0, 0);
  }
`
export const tag = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  padding: 0.3rem 0.8rem;
  background-color: ${variables.secondary_dark_bg};
  border-radius: 8px;
  text-align: left;
  color: ${variables.text_primary_dark};
  width: 5rem;
  text-transform: uppercase;
`
