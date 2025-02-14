import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PostDetails from './pages/PostDetails'
import EditPost from './pages/EditPost'
import MyBlogs from './pages/MyBlogs'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import CreatePost from './pages/CreatePost'
import UserContextProvider from './context/userContext'



function App() {

  return (
    <>
      <div>
        <UserContextProvider>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/write' element={<CreatePost />} />
          <Route path='/Post/post/:id' element={<PostDetails />} />
          <Route path='/edit/:id' element={<EditPost />} />
          <Route path='/myblogs/:id' element={<MyBlogs />} />
          <Route path='/profile/:id' element={<Profile />} />

        </Routes>
        </UserContextProvider>
      </div>
    </>
  )
}

export default App
