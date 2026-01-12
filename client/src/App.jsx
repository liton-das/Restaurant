import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layoute from './layoute/Layoute'
import Home from './pages/Home'
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layoute/>}>
          <Route index element={<Home/>}/>
      </Route>
    </Route>
  ))
  return (
    <>
     <RouterProvider router={router}/> 
    </>
  )
}

export default App
