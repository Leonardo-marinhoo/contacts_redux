import * as S from './styles'
import logo from '../../assets/images/logo.png'
import Filter from '../../components/Filter'
import { AiOutlineDownSquare, AiOutlineUser } from 'react-icons/ai'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { FaRegStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { changeQuery } from '../../store/reducers/filter'
import { Tags } from '../../utils/enums/tags'

type Props = {
  isEditing?: boolean
}

const Aside = ({ isEditing }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Aside>
      <S.Branding>
        <img src={logo} alt="" />
        <S.Title>Conttata</S.Title>
        <S.NotificationIcon />
      </S.Branding>
      {!isEditing ? (
        <>
          <S.InputField>
            <S.SearchIcon />
            <S.SearchInput
              type="text"
              placeholder="Search"
              onChange={(e) => dispatch(changeQuery(e.target.value))}
            />
          </S.InputField>
          <S.FilterList>
            <Filter Icon={AiOutlineUser} Label={'All Contacts'} type="All" />
            <Filter
              Icon={IoBriefcaseOutline}
              Label={'Business'}
              value={Tags.BUSINESS}
              type="Tag"
            />
            <Filter
              Icon={FaRegStar}
              Label={'Favorites'}
              value={Tags.FAVORITE}
              type="Tag"
            />
            <Filter
              Icon={AiOutlineDownSquare}
              Label={'Friends'}
              value={Tags.FRIEND}
              type="Tag"
            />
          </S.FilterList>
        </>
      ) : (
        <></>
      )}
      {isEditing ? (
        <>
          <S.AddBtn to={'/'} isEditing={isEditing}>
            <S.BackIcon />
            Back to Contacts
          </S.AddBtn>
        </>
      ) : (
        <>
          <S.AddBtn to={'/new_contact'}>
            Add Contact <S.AddIcon />
          </S.AddBtn>
        </>
      )}
    </S.Aside>
  )
}

export default Aside
