import { BrowserRouter, Routes, Route } from "react-router-dom"
import Hero from "./components/Hero"
import Menu from "./components/Menu"

export default function App(){
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero/>}></Route>
          <Route path="menu" element={<Menu />} />
        </Routes>
    </BrowserRouter>
  )
}