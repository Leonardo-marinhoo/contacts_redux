import * as S from './styles'
import logo from '../../assets/images/logo.png'
import Filter from '../../components/Filter'
import { AiOutlineDownSquare, AiOutlineUser } from 'react-icons/ai'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { FaRegStar } from 'react-icons/fa'

const Aside = () => {
  return (
    <S.Aside>
      <S.Branding>
        <img src={logo} alt="" />
        <S.Title>Conttata</S.Title>
        <S.NotificationIcon />
      </S.Branding>
      <S.InputField>
        <S.SearchIcon />
        <S.SearchInput type="text" placeholder="Search" />
      </S.InputField>
      <S.FilterList>
        <Filter Icon={AiOutlineUser} Label={'All Contacts'} isEnabled />
        <Filter Icon={IoBriefcaseOutline} Label={'Business'} />
        <Filter Icon={FaRegStar} Label={'Favorites'} />
        <Filter Icon={AiOutlineDownSquare} Label={'Tags'} />
      </S.FilterList>
    </S.Aside>
  )
}

export default Aside
