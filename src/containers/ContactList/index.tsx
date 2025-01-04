import * as S from './styles'

const ContactList = () => {
  return (
    <>
      <S.Subtitle>127 total</S.Subtitle>
      <S.Title>Contacts</S.Title>
      <ul>
        <li className="contact">
          <div className="thumb">L</div>
          <div className="name">
            <span>First Name</span>
            <span>Surname</span>
          </div>
          <div className="info">
            <span>Phone</span>
            <span>email</span>
          </div>
          <div className="actions">
            <button>...</button>
          </div>
        </li>
      </ul>
    </>
  )
}

export default ContactList
