import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Weather Dashboard</h1>
        <SearchBar></SearchBar>
      </div>
      
    </>
  )
}

export default App
