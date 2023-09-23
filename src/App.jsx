import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import FooterApp from './components/common/FooterApp'
import HeaderApp from './components/common/HeaderApp'
import DetailsComponents from './components/Navs/List_Recipes'

import Help from './components/Navs/Help'

import NotFound from './components/Navs/NotFound'
import DetailsRecipe from './components/Navs/DetailsRecipe'
import LoginPage from './components/forms/LoginPage'
import Home from './components/Navs/Home'
import Add_New_Recipe from './components/Navs/Add_New_Recipe'
import Settings from './components/Navs/Settings'

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
        <Route path="/Add_New_Recipe" element={<Add_New_Recipe />} />
        <Route path="/help" element={<Help />} />
        <Route path="/listRecipe" element={<DetailsComponents />} />
        <Route path="recipes/:id" element={<DetailsRecipe />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <FooterApp className="space-10" />
    </div>
  )
}

export default App
