import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import HeroSection from './components/Hero/HeroSection'
import Footer from './components/FooterSection/Footer'
import ServicesSection from './components/ServicesSection/ServicesSection'
import TechnologySection from './components/TechnologySection/TechnologySection'
import { Routes, Route } from 'react-router-dom'
import HomePages from './components/pages/HomePages'
import InternshipSection from './components/InternshipSection/InternshipSection'
import ContactForm from './components/ContactForm/ContactForm'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import AboutUs from './components/AboutUs/AboutUs'


function App() {


  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<HomePages />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/internships' element={<InternshipSection />} />







      </Routes>


      <Footer />




    </>
  )
}

export default App
