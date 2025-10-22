import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sueños from './componentes/Sueños'
import Comunes from './componentes/comunes'
import Pesadillas from './componentes/pesadillas'
import SuenosAmor from './componentes/persona'
import PortadaSuperpuesta from './componentes/PortadaSuperpuesta'
import SeccionNumerologia from './componentes/numerologia'
import HoroscopoTarot from './componentes/HoroscopoTarot'
import Tarod from './componentes/Tarod'
import TarotBooking from './componentes/reserva'
import TarotReviewDashboard from './componentes/opiniones'

function App() {

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<PortadaSuperpuesta/>}/>
        <Route path='/suenos-comunes' element={<Comunes/>}/>
        <Route path='/pesadillas' element={<Pesadillas/>}/>
        <Route path='/significado-agua' element={<SuenosAmor/>}/>
        <Route path='/suenos' element={<Sueños/>}/>
        <Route path='/horoscopo' element={<HoroscopoTarot/>}/>
        <Route path='/tarod' element={<Tarod/>}/>
        <Route path='/numero' element={<SeccionNumerologia/>}/>
        <Route path='/reserva' element={<TarotBooking/>}/>
        <Route path='/opiniones' element={<TarotReviewDashboard/>}/>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
