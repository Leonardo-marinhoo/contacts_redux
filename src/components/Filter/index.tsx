import { IconType } from 'react-icons'
import * as S from './styles'

export type FilterProps = {
  Icon: IconType
  Label: string
  isEnabled?: boolean
}

const Filter = ({ Icon: IconComponent, Label, isEnabled }: FilterProps) => {
  return (
    <S.Card isenabled={isEnabled}>
      <S.IconWrapper>
        <IconComponent />
      </S.IconWrapper>
      <S.Label>{Label}</S.Label>
    </S.Card>
  )
}

export default Filter
