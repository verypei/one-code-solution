// import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouterProps} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import DetailPost from './views/DetailPost';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/detail/:id' element={<DetailPost />} />

    </Routes>
  );
}

export default App;
