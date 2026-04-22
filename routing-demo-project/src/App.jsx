import Profile from './screens/Profile';
import './App.css';
import LoginPage from './screens/Login';
import NotFound from './screens/NotFound';
import HomePage from './screens/Home';
import ListPost from './components/Post';
import UserProfile from './components/UserProfile';
import { Route, Routes } from 'react-router';

function App() {
  //url: http://localhost:5173/profile
  //url: http://localhost:5173/login

  return (
    <div className='app w-screen min-h-screen bg-[#F0F4F5]'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<Profile />} >
          <Route index element={<UserProfile />} />
          <Route path='my-posts' element={<ListPost />} />
          <Route path='my-profile' element={<UserProfile />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;
