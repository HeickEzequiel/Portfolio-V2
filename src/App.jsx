import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"

function App() {
  
    return (
    <div className="bg-linear-to-br from-[#0f0f1a] via-[#1a103a] to-black">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>

  )
}

export default App
