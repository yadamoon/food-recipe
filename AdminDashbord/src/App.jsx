import './App.css'
import SideBar from './components/SideBar/SideBar'
import HeaderApp from './components/SideBar/common/HeaderApp'

function App() {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh]">
        <SideBar />
      </div>
      <div className="basis-[88%] h-[100vh]">
        <HeaderApp />
      </div>
    </div>
  )
}

export default App
