import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from "./components/Home/Home"
import Contact from './components/Contact/Contact.jsx'
import About from "./components/About/About.jsx"
import User from './components/User/User.jsx';
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: < Layout />,
//     children: [{
//       path: "",
//       element: <Home />
//     }, {
//       path: '',
//       element: <About />,
//     }, {
//       path: "about",
//       element: <About />
//     }, {
//       path: "/contact",
//       element: <Contact />
//     }

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} /> //path='user/:parameter which we have given'
      <Route
      loader={githubInfoLoader}
        path='github'
        element={<Github />}

      />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
