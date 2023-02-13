import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Table } from './components/Table'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Table/>
    </div>
  )
}

export default App
