import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { IncreContextProvider } from './context/ContextProvider'


function App() {

  return (
    <>
     <IncreContextProvider>
     <Home/>
     <About/>
     </IncreContextProvider>
    </>
  )
}

export default App
