import styled from 'styled-components'
import variables from '../../styles/variables'
import { IoMdNotificationsOutline, IoIosSearch } from 'react-icons/io'

export const Aside = styled.aside`
  min-width: 250px;
  width: 16vw;
  height: 100vh;
  border-right: 1px solid ${variables.border_color};
  padding: 0.8rem 1rem;
`

export const Branding = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  img {
    object-fit: contain;
    width: 30px;
    margin-right: 0.5rem;
  }
`
export const Title = styled.h1`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 1.4rem;
  text-transform: uppercase;
  background: linear-gradient(to TOP, #b3b3b3, #f5f5f5);
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const NotificationIcon = styled(IoMdNotificationsOutline)`
  font-size: 1.4rem;
  margin-left: auto;
`
export const SearchIcon = styled(IoIosSearch)`
  font-size: 1.4rem;
  color: rgba(213, 213, 213, 0.39);
`

export const InputField = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(27, 27, 27);
  border: 2px solid rgba(71, 71, 71, 0.41);
  border-radius: 8px;
  padding: 0.3rem 0.5rem;
  gap: 0.5rem;
`
export const SearchInput = styled.input`
  font-family: 'Poppins';
  background: transparent;
  border: none;
  outline: none;
`

export const FilterList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 0.8rem;
`
