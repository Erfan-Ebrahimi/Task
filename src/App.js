import {Stack } from '@mui/material';
import { Routes , Route } from 'react-router-dom';
import './App.css';
import Form from './components/Details/Form/Form';
import Plan from './components/Details/plan/Plan';
import Menu from './components/Menu/Menu';

const App = () => {
  return (
    <Stack className="App" sx={{
      display:'flex',
      flexDirection:{xs:'column',md:'row'}
    }} >
      <Menu/>
        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/plan' element={<Plan/>}/>
        </Routes>
    </Stack>
  );
}

export default App;
