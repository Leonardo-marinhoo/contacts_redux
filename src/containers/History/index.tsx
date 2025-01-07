import { IoIosArrowDown, IoIosCalendar } from 'react-icons/io'
import { Title } from '../../styles/GlobalStyle'
import * as S from './styles'
import { AiOutlinePhone } from 'react-icons/ai'
import { HiOutlineVideoCamera } from 'react-icons/hi'

const History = () => {
  return (
    <S.Container>
      <Title>Upcoming Activity</Title>
      <S.filterTab>
        <S.filterBtn>
          <IoIosCalendar />
          This week
        </S.filterBtn>
        <S.filterBtn>
          FilterBy
          <IoIosArrowDown />
        </S.filterBtn>
      </S.filterTab>
      <S.ResultsContainer>
        <S.hierarchyLine />
        <S.Item>
          <S.itemInfo>
            <S.thumb>
              <AiOutlinePhone />
            </S.thumb>
            <S.Text>Call</S.Text>
            <S.ContactThumb>LM</S.ContactThumb>
            <S.ContactName>Leonardo Marinho</S.ContactName>
            <S.Text>Discuss Conttata Features</S.Text>
            <S.Date>05.01, 18:49 AM</S.Date>
          </S.itemInfo>
        </S.Item>
        <S.hierarchyLine />
        <S.Item>
          <S.itemInfo>
            <S.thumb>
              <HiOutlineVideoCamera />
            </S.thumb>
            <S.Text>Meeting</S.Text>
            <S.ContactThumb>JG</S.ContactThumb>
            <S.ContactName>José Geraldo</S.ContactName>
            <S.Date>01.01, 13:30 AM</S.Date>
          </S.itemInfo>
          <S.Description>
            <S.title>Budget Planning</S.title>
            <S.subtitle>
              This budget review outlines the financial performance and
              allocation of resources for the development and marketing of
              Conttata. The review aims to assess spending efficiency, identify
              areas for cost reduction, and propose strategies to optimize
              future budgets.
            </S.subtitle>
          </S.Description>
        </S.Item>
      </S.ResultsContainer>
    </S.Container>
  )
}

export default History
