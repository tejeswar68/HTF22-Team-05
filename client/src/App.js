import React from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Development from './components/Categories/Development'
import Itsoftware from './components/Categories/Itsoftware'
import Music from './components/Categories/Music'
import Marketing from './components/Categories/Marketing'
import Home from './components/Home';
import Business from './components/Categories/Business'
import Teach from './components/Teach'
import Design from './components/Categories/Design';
import Health from './components/Categories/Health';
import Personal from './components/personal';
import Login from './components/LoginComponent/Login';
import SignUp from './components/SignUpComponent/SignUp';
import Instructor from './components/InstructorComponent/CreateCourse'
function App() {
  return (
    <div>
      <Header/>


    
        
    <Routes>

          <Route path='/'  element={<Home/>}/>
          <Route path='/home'  element={<Home/>}/>
          <Route path='/instructor' element ={<Instructor/>}/>
          <Route path='/development'  element={<Development/>}/>
          <Route path='/itsoftware'  element={<Itsoftware/>}/>
          <Route path='/business'  element={<Business/>}/>
          <Route path='/marketing' element={<Marketing/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/design' element={<Design/>}/>
          <Route path='/health' element={<Health/>}/>
          <Route path='/personal' element={<Personal/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
    </Routes>




















     <div className='footer w-100'><Footer/></div> 
    </div>

  )
}

export default App