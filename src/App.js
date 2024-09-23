import { createContext, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Navbar'
import Home from './pages/Home'
import Pets from './pages/Pets'
import PetDetails from './pages/PetDetails'
import Medicines from './pages/Medicines'

// Criação do contexto de autenticação
export const LoginContext = createContext()

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  return (
    <BrowserRouter>
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Navbar/>
        <div>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/pets" element={<Pets/>}></Route>
              <Route path="/pets/:id" element={<PetDetails/>}></Route>
              <Route path="/medicines" element={<Medicines/>}></Route>
            </Routes>
        </div>
      </LoginContext.Provider>
    </BrowserRouter>
  )
}