import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import { IntroPage } from './page/intro-page'


const App = () => (
    <Routes>
      <Route path="/" element={<IntroPage />} />
    </Routes>
)

export default App
