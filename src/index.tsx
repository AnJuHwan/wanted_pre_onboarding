import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Toggle from './components/Toggle/Toggle'
import Tab from './components/Tab/Tab'
// import Slider from './components/Slider/Slider';
// import Input from './components/Input/Input';
// import Dropdown from './components/Dropdown/Dropdown';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/toggle' element={<Toggle />} />
        <Route path='/tab' element={<Tab />} />
        {/* <Route path='/slider' element={<Slider />} /> */}
        {/* <Route path='/input' element={<Input />} /> */}
        {/* <Route path='/dropdown' element={<Dropdown />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
