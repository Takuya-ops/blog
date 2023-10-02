import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faArrowRightToBracket, faFilePen, faHouseChimney } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({isAuth}) => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouseChimney}/>
        ホーム</Link>
      {/* isAuthがfalseのときだけlogin画面を表示させる */}
      {!isAuth ? <Link to="/login">
        <FontAwesomeIcon icon={faArrowRightFromBracket}/>
        ログイン</Link> : 
        <>
        <Link to="/createpost">
        <FontAwesomeIcon icon={faFilePen}/>
        新規投稿</Link>
        <Link to="/logout">
        <FontAwesomeIcon icon={faArrowRightToBracket}/>
        ログアウト</Link>
        </>
        }
    </nav>
  )
}

export default Navbar