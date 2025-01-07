import { IconType } from 'react-icons'
import * as S from './styles'
import { Tags } from '../../utils/enums/tags'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { setFilter } from '../../store/reducers/filter'

export type FilterProps = {
  Icon: IconType
  Label: string
  value?: Tags.BUSINESS | Tags.FAVORITE | Tags.FRIEND | Tags.OTHERS
  type: 'All' | 'Tag'
}

const Filter = ({ Icon: IconComponent, Label, value, type }: FilterProps) => {
  const { tag } = useSelector((state: RootReducer) => state.filter)
  const dispatch = useDispatch()
  const isEnabled = () => {
    return value === tag
  }

  const changeFilter = () => {
    dispatch(
      setFilter({
        type,
        tag: value
      })
    )
  }
  return (
    <S.Card isenabled={isEnabled()} onClick={changeFilter}>
      <S.IconWrapper>
        <IconComponent />
      </S.IconWrapper>
      <S.Label>{Label}</S.Label>
    </S.Card>
  )
}

export default Filter
