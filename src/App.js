import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import { LandingLayout } from './component/LandingLayout'
import { IntroPage } from './page/intro-page'


const App = () => (
  <LandingLayout>
    <Routes>
      <Route path="/" element={<IntroPage />} />
    </Routes>
  </LandingLayout>
)

export default App
