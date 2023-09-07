import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import FooterApp from './components/common/FooterApp'
import HeaderApp from './components/common/HeaderApp'
import DetailsComponents from './components/Navs/DetailsComponents'
import Services from './components/Navs/Services'
import Help from './components/Navs/Help'
import RegisterForm from './components/forms/RegisterForm'
import NotFound from './components/Navs/NotFound'
import { useEffect, useState } from 'react'
import axios from 'axios'

const apiURL = ''

function App() {
  const [recipes, setRecipe] = useState([])

  useEffect(() => {
    async function getRecipes() {
      const result = await axios.Axios(apiURL)
      setRecipe(result.data)
    }
    getRecipes()
  }, [])
  return (
    <div className="pt-0 bg-gray-300 ">
      <HeaderApp />
      <Nav />
      <Routes className="">
        <Route path="/" element={<DetailsComponents recipes={recipes} />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/help" element={<Help />} />
        <Route path="/RegisterForm" element={<RegisterForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterApp />
    </div>
  )
}

export default App
