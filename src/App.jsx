import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/authentication/blog/Home'
import Register from './pages/authentication/Register'
import Login from './pages/authentication/Login'
import AddBlog from './pages/authentication/Blog/AddBlog'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/addBlog' element={<AddBlog />} />
      </Routes>
    </BrowserRouter>
        )
}

export default App
