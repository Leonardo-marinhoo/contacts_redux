import styled from 'styled-components'
import variables from '../../styles/variables'
import { IoMdNotificationsOutline, IoIosSearch, IoIosAdd } from 'react-icons/io'
import { HiOutlineArrowCircleLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'

type ButtonProps = {
  isEditing?: boolean
}

export const Aside = styled.aside`
  min-width: 16vw;
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
  color: white;
`

export const FilterList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 0.8rem;
`
export const AddBtn = styled(Link)<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.isEditing ? variables.secondary_dark_bg : variables.accent_color};
  color: white;
  font-size: 1rem;
  font-family: 'Poppins';
  width: 100%;
  height: 3rem;
  margin-top: 2rem;
  border: none;
  border-radius: 8px;
  outline: none;
`
export const AddIcon = styled(IoIosAdd)`
  margin-left: 0.5rem;
  font-size: 1.5rem;
`
export const BackIcon = styled(HiOutlineArrowCircleLeft)`
  margin-right: 0.5rem;
  font-size: 1.5rem;
`
