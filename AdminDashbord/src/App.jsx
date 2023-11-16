import './App.css'
import SideBar from './components/SideBar/SideBar'

function App() {
  return (
    <div className="">
      <div className="basis-[12%] h-[100vh]">
        <SideBar />
      </div>
      <div className="basis-[88%] border">
        {' '}
        <p className="text-black">hello</p>
      </div>
    </div>
  )
}

export default App
