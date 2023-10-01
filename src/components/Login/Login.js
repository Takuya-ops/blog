import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../../firebase'
// ログイン後どの画面を表示させるか制御
import { useNavigate } from 'react-router-dom'

const Login = ({setIsAuth}) => {
  const navigate = useNavigate()
  const loginInWithGoogle = () => {
    // googleでログイン
    signInWithPopup(auth, provider).then((result) => 
    {
      localStorage.setItem("isAuth", true)
      // ログインしたのかどうかを保持する状態変数
      setIsAuth(true)
      // App.jsのルーティング設定のパスを明示
      navigate("/")
    })
  }
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login