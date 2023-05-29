import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddProduct from './components/AddProduct'
import DisplayAllProducts from './components/DisplayAllProducts'
import Layout from './components/Layout'
import Profile from './components/Profile'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<DisplayAllProducts/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/product/new' element={<AddProduct/>}/>
      </Route>
    </Routes>
  )
}

export default App
