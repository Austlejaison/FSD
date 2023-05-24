import logo from './logo.svg';
import './App.css';
import { Typography } from '@mui/material';
import  New2  from './component/New2';
import New3 from './component/New3';
import StateBasics from './component/StateBasics';
import Home from './component/Home';
import Table1 from './component/Table1';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<StateBasics></StateBasics>}/>
  <Route path='/p' element={<New2/>}/>
  <Route path='/pi' element={<New3/>}/>
</Routes>
   </div>
  );
}

export default App;
