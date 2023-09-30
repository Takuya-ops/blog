import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import Home from '../Home/Home'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouseChimney}/>
        ホーム</Link>
      <Link to="/createpost">新規投稿</Link>
      <Link to="/login">ログイン</Link>
      <Link to="/logout">ログアウト</Link>
    </nav>
  )
}

export default Navbar