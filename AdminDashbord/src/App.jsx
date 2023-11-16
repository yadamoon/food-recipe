import './App.css'
import SideBar from './components/SideBar/SideBar'

function App() {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh]">
        <SideBar />
      </div>
      <div className="basis-[88%] h-[100vh]">hello</div>
    </div>
  )
}

export default App
