import './App.css'
import SideBar from './components/SideBar/SideBar'
import HeaderApp from './components/SideBar/common/HeaderApp'

function App() {
  return (
    <div className="flex grid-cols-4">
      <div className="basis-[12%] h-[100vh] col-span-1">
        <SideBar />
      </div>
      <div className="basis-[88%] h-[100vh] col-span-3">
        <HeaderApp />
      </div>
    </div>
  )
}

export default App
