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
import SearchForm from './components/forms/SearchForm'

function App() {
  return (
    <div className="pt-0 bg-gray-300 ">
      <HeaderApp />
      <Nav />

      <Routes className="pl-40 pr-40">
        <Route path="/" element={<DetailsComponents />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/help" element={<Help />} />
        <Route path="/RegisterForm" element={<RegisterForm />} />
        <Route path="DetailsRecipe" element={<DetailsRecipe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterApp />
    </div>
  )
}

export default App
