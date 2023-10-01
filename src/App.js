import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import CreatePost from './components/CreatePost/CreatePost';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';

function App() {
  // ログイン状態を保持する変数
  const [isAuth, setIsAuth] = useState(false);
  
  return (
    <Router>
      {/* NavbarにisAuthをpropsとして渡す */}
      <Navbar isAuth={isAuth}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/createpost' element={<CreatePost/>}></Route>
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path='/logout' element={<Logout setIsAuth={setIsAuth}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
