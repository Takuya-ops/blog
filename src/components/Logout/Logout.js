import React from 'react'
import { auth } from '../../firebase'
// ログイン後どの画面を表示させるか制御
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate()
  const logout = () => {
    // googleでログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      // ログインしたのかどうかを保持する状態変数
      setIsAuth(false);
      // ログアウト後、表示させるページ
      navigate("/login");
    })
  }
  return (
    <div>
      <p>ログアウト</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  )
}

export default Logout