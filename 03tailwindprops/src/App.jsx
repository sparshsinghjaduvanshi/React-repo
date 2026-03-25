import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card.jsx'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }

  let newArr = [1, 2, 3]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
     <Card channel="chaiaurcode" someObject={myObj} btnText='Click me'/>
     {/* <Card channel="chaiaurcode" someObject={newArr}/> */}
     <Card username="chaiaurcode" btnText='Enter me'/>
     <Card/>
    </>
  )
}

export default App
