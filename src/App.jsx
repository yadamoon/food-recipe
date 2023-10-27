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
import RegisterForm from './components/forms/RegisterForm'
import ForgetPassword from './components/forms/ForgetPassword'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Contact from './components/Navs/Contact'
import { useState, useEffect } from 'react'
import ReactLoading from 'react-loading'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div className=" bg-gray-200 w-full">
      <HeaderApp />
      <Nav />
      <br />
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-screen bg-white">
          <ReactLoading
            type="spinningBubbles"
            color="#008080"
            height={100}
            width={50}
          />
        </div>
      ) : (
        <div>
          {' '}
          <Routes className="pl-40 pr-40">
            <Route path="/" element={<Home />} />
            <Route path="/Add_New_Recipe" element={<Add_New_Recipe />} />
            <Route path="/help" element={<Help />} />
            <Route path="/listRecipe" element={<DetailsComponents />} />
            <Route path="recipes/:id" element={<DetailsRecipe />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="ForgetPassword" element={<ForgetPassword />} />
            <Route path="/Register_New_Account" element={<RegisterForm />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <FooterApp className="space-10" />
        </div>
      )}

      <ToastContainer />
    </div>
  )
}

export default App
