import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import FooterApp from './components/common/FooterApp'
import HeaderApp from './components/common/HeaderApp'
import DetailsComponents from './components/Navs/List_Recipes'
import Services from './components/Navs/Services'
import Help from './components/Navs/Help'
import RegisterForm from './components/forms/RegisterForm'
import NotFound from './components/Navs/NotFound'
import DetailsRecipe from './components/Navs/DetailsRecipe'
import LoginPage from './components/forms/LoginPage'
import Home from './components/Navs/Home'

/*
  
*/

function App() {
  return (
    <div className=" bg-gray-300 ">
      <HeaderApp />
      <Nav />
      <br />

      <Routes className="pl-40 pr-40">
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/help" element={<Help />} />
        <Route path="/listRecipe" element={<DetailsComponents />} />
        <Route path="recipes/:id" element={<DetailsRecipe />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <FooterApp className="space-10" />
    </div>
  )
}

export default App
