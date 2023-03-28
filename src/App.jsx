import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Report from './component/Report/Report'
import Dashboard from './component/Dashboard/Dashboard'
import AddDEO from './component/Dashboard/AddDEO/AddDEO'
import TransfarDEO from './component/Dashboard/TransfarDEO/TransfarDEO'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Dashboard />
      <AddDEO />
      <TransfarDEO />
    </div>
  )
}

export default App
