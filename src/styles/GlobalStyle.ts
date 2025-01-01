import { styled, createGlobalStyle } from 'styled-components'
import variables from './variables'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
}
body{
  background-color: ${variables.background_color};
  color:white;
  font-family:"Roboto Mono";
}
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`
