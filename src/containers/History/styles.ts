import styled from 'styled-components'
import variables from '../../styles/variables'
import { Thumb } from '../../components/Contact/styles'
import { Subtitle } from '../../styles/GlobalStyle'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${variables.tertiary_dark_bg};
  min-width: 45%;
  height: 90vh;
  margin-left: 1rem;
  padding: 1rem;
  border-radius: 8px;
`

export const filterTab = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 1rem;
`
export const filterBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${variables.secondary_dark_bg};
  padding: 0.3rem 0.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
`
export const hierarchyLine = styled.div`
  width: 2px;
  height: 100%;
  min-height: 3rem;
  margin: 0.5rem 0;
  margin-left: 1rem;
  background-color: ${variables.secondary_dark_bg};
`

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background-color: red; */
`
export const itemInfo = styled.div`
  display: flex;
  align-items: center;
`
export const thumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  color: ${variables.text_primary_dark};
  background-color: ${variables.secondary_dark_bg};
  padding: 0.5rem;
`
export const ContactThumb = styled(Thumb)`
  width: 1.1rem;
  height: 1.1rem;
  font-size: 0.8rem;
  padding: 1rem;
`
export const ContactName = styled.a`
  color: ${variables.text_blue};
  margin: 0 0.5rem;
  font-size: 0.8rem;
  width: fit-content;
  white-space: nowrap;
`
export const Text = styled.p`
  color: ${variables.text_primary_dark};
  margin: 0 0.5rem;
  font-size: 0.9rem;
  /* width: fit-content; */
`
export const Date = styled(filterBtn)`
  width: fit-content;
  white-space: nowrap;
  font-size: 0.8rem;
`
export const Description = styled.div`
  flex-direction: column;
  background-color: ${variables.primary_dark_bg};
  border-radius: 8px;
  padding: 1rem;
  width: 93%;
  margin: 1rem auto;
`
export const subtitle = styled(Subtitle)`
  font-size: 0.7rem;
  text-align: left;
`
export const title = styled(Text)`
  margin: 0;
`
