import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/authentication/blog/Home'
import Register from './pages/authentication/Register'
import Login from './pages/authentication/Login'
import AddBlog from './pages/authentication/blog/AddBlog'
import Cards from './pages/authentication/blog/components/cards/Cards'
import EditBlog from './pages/authentication/blog/EditBlog'
import SingleBlog from './pages/authentication/blog/SingleBlog'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/blog/add' element={<AddBlog />} />
        <Route path='/card' element={<Cards />} />
        <Route path='/blog/edit' element={<EditBlog />} />
        <Route path='/blog/id' element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
        )
}

export default App
