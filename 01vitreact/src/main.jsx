import React from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <h1>My App</h1>
//     </div>
//   )
// }

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

// const anotherElement= (
//   <a href="https://google.com" target="_blank">Click me to visit google</a>
// )

const anotherUser = "Chai aur react"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click me to visit google',
  anotherUser
)

// const root = ReactDOM.createRoot(document.getElementById('root'))
const root = createRoot(document.getElementById('root'))
root.render(

  // anotherElement
  reactElement

  // <App />

)
