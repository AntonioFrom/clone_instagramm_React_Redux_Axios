import React from 'react'
import { Provider } from 'react-redux'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainPage from './pages/MainPage'
import UserPage from './pages/UserPage'
import {store} from "./redux/store"

export const App = () => {
  return (
   <Provider store={store}>
   <BrowserRouter>
   
    <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/:id' element={<UserPage/>} />
      </Routes> 
   </BrowserRouter>
   </Provider>
   
  
  )
}
export default App
