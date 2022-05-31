import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './index.css'
import Home from './Components/home/Home';
import Login from './Components/login/Login';
import SignUp from './Components/signup/SignUp';
import MigrainesAdder from './Components/migrainesAdder/MigrainesAdder.jsx';
import CalendarBox from './Components/calendar/CalendarBox';
import MainPage from './Components/mainPage/MainPage';
import Graph from './Components/graph/Graph';
import Profil from './Components/profile/Profil.jsx';
import MyDevice from './Components/myDevice/MyDevice';
import Circle from './Components/circle/Circle';
import Summary from './Components/summary/Summary';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path ='/login' element={<Login />} />
        <Route exact path='/signup' element ={<SignUp />} />
        <Route exact path='/main' element ={<MainPage />} />
        <Route exact path='/add' element ={<MigrainesAdder />} />
        <Route exact path='/calendar' element ={<CalendarBox />} />
        <Route exact path='/graph' element ={<Graph />} />
        <Route exact path='/profil' element ={<Profil />} />



      </Routes>
    </BrowserRouter>

  );
}

export default App;