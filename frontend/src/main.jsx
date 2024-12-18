import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from '../Layout'
import Home from './pages/Home'

import Login from './pages/Login'
import store, { persistor } from './app/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import Hero from './ComponentMain.jsx/Hero'


const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout/>}>
    
    <Route path='' element={<Home/>}/>
    <Route path='login' element={<Login/>}/>


    


    </Route>
    
    </>
  )
)

createRoot(document.getElementById('root')).render(

  <StrictMode>
  <Provider store={store}>
   
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    
  </Provider>
</StrictMode>
)
