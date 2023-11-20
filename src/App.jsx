// import 'bootstrap/dist/css/bootstrap.min.css'
// import Signup from './Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Login from './Login'
// import Homepage from './Homepage'
import Home from './component/Homepage/Home'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import Dashboard from './component/Dashboard/Dashboard'
import LiteraryForm from './component/CopyrightPage/LiteraryWork/index'
import Help from './component/Help/Help'
import Settings from './component/SettingsPage/Settings'
import FaqPage from './component/OtherPages/FaqPage'
import AboutUSPage from './component/OtherPages/AboutUsPage'
import ContactUsPage from './component/OtherPages/ContactUsPage'
import PasswordReset from './component/OtherPages/PasswordReset'
import EmailVerify from './component/OtherPages/EmailVerify'
import Profile from './component/UserProfile/UserProfile'
import FormModalPage from './component/Dashboard/FormModalPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/faq' element={<FaqPage />}></Route>
        <Route path='/about-us' element={<AboutUSPage />}></Route>
        <Route path='/contact' element={<ContactUsPage />}></Route>
        <Route path='/homepage' element={<Home />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path='/register' element={<Register />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/help' element={<Help />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='/form/:selectedValue' element={<LiteraryForm />}></Route>
        <Route path='/verify-email' element={<EmailVerify />}></Route>
        <Route path='/user-profile' element={<Profile />}></Route>
        <Route path='/formpage/:index' element={<FormModalPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
