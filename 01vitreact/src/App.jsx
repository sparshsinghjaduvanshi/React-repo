import { useState } from 'react'
import Chai from './chai'

function App() {
  const [count, setCount] = useState(0)
  const username = 'John Doe'

  return (
    
      // <h1>cahi aur react</h1>
    <>
      <Chai />
      <p>Hello world! my name is {username} </p>
    </>
  )
}

export default App
