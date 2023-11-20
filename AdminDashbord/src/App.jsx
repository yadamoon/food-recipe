import './App.css'
import Dashboard from './components/Layout/Dashboard'
import Error from './components/Layout/Error'
import SideBar from './components/SideBar/SideBar'
import HeaderApp from './components/SideBar/common/HeaderApp'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="flex grid-cols-4">
      <div className="basis-[12%] h-[100vh] col-span-1">
        <SideBar />
      </div>
      <div className="basis-[88%] h-[100vh] col-span-3">
        <HeaderApp />
        <div className="mt-2">
          <Dashboard />
        </div>

        {/* <Routes>
          <Route path="" element={<Error />} />
          <Route path="/" element={<Dashboard />} />
        </Routes> */}
      </div>
    </div>
  )
}

export default App
