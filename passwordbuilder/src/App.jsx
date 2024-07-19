import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PasswordBuilder from './components/PasswordBuilder'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <PasswordBuilder/>
  </>
  )
}

export default App
