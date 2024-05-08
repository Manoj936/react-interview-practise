import { useState } from 'react'

import './App.css'
import LightGrid from '../component/LightGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LightGrid/>
    </>
  )
}

export default App
