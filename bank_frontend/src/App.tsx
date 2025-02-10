import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import TransactionHistory from './pages/TransactionHistory'
import AccountInfo from './pages/AccountInfo'
import UserInfo from './pages/UserInfo'
import Landing from './pages/Landing'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/transactionhistory' element={<TransactionHistory/>}/>
          <Route path='/accountinfo' element={<AccountInfo/>}/>
          <Route path='/userinfo' element={<UserInfo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
