import './App.css'
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
        <Routes>
          <Route path="/" element={<HeaderApp />} />
          <Route path="" element={<Error />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
