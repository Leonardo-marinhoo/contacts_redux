import { styled, createGlobalStyle } from 'styled-components'
import variables from './variables'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
body{
  background-color: ${variables.primary_dark_bg};
  color:white;
  font-family:"Poppins";
  overflow: hidden;
  scrollbar-width: thin;
  scrollbar-color: #444 #222;
}
body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-track {
  background: #222;
}

body::-webkit-scrollbar-thumb {
  background-color: #444;
  border-radius: 4px;
  border: 2px solid #222;
}

body::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
`
type ContainerProps = {
  flex_direction: 'row' | 'column'
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`
export const MainContainer = styled.main<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flex_direction};
  padding: 1rem 0.5rem;
  width: 100%;
`
export const Title = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
  color: ${variables.text_primary_dark};
`
export const Subtitle = styled.span`
  font-weight: 400;
  color: ${variables.subtitle_primary_dark};
`
