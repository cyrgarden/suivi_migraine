import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {HashRouter} from 'react-router-dom'
import './index.css'
import Home from './Components/home/Home';
import Login from './Components/login/Login';
import SignUp from './Components/signup/SignUp';
import MigrainesAdder from './Components/migrainesAdder/MigrainesAdder.jsx';
import MainPage from './Components/mainPage/MainPage';
import Graph from './Components/graph/Graph';
import Profil from './Components/profile/Profil.jsx';
import MyDevice from './Components/myDevice/MyDevice';
import Circle from './Components/circle/Circle';
import Summary from './Components/summary/Summary';


function App() {
  return (
    
      <Routes>
        <Route exact path='/suivi_migraine' element={<Home />} />
        <Route exact path ='/suivi_migraine/login' element={<Login />} />
        <Route exact path='/suivi_migraine/signup' element ={<SignUp />} />
        <Route exact path='/suivi_migraine/main' element ={<MainPage />} />
        <Route exact path='/suivi_migraine/add' element ={<MigrainesAdder />} />
        <Route exact path='/suivi_migraine/graph' element ={<Graph />} />
        <Route exact path='/suivi_migraine/profil' element ={<Profil />} />
      </Routes>

  );
}

export default App;
