import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom'
// import './styles.css';
import Home from './Home.tsx';
import Navbar from './Navbar.tsx'
import About from './About.tsx'
import Coinfundr from './Coinfundr.tsx'
import Eshopa from './Eshopa.tsx'
import Werb from './Werb.tsx'
import Quizzical from './Quizzical.tsx'
import Footer from "./Footer.tsx";


import ScrollToTop from './scrollToTop.tsx'


export default function App() {

  const [isOpen, setOpen] = useState(false)
  const [projectsRef, setProjectsRef] = useState(null)
  const [contactRef, setContactRef] = useState(null)

  function updateProjectRef(ref) {
    setProjectsRef(ref)
  }

  function updateContactRef(ref) {
    setContactRef(ref)
  }


  function executeScroll() {
    projectsRef.current.scrollIntoView()
  }

  function executeScroll2() {
    contactRef.current.scrollIntoView()
  }

  function flipNav() {
    setOpen(prevOpen => !prevOpen)
  }

  return (
    <>
      <Navbar 
        projectsRef={projectsRef}
        contactRef={contactRef}
        isOpen={isOpen}
        setOpen={setOpen}
        flipNav={flipNav}
        executeScroll={executeScroll}
        executeScroll2={executeScroll2}
      />
      
      <Routes>
        <Route 
          path="/"
          element={
            <>
              <Home
                updateProjectRef={updateProjectRef}
                updateContactRef={updateContactRef}
              />
            </>
          }
        />

        <Route 
          path="/about"
          element={
            <>
              <ScrollToTop />
              <About />
            </>
          }
        />

        <Route 
          path="/projects/coinfundr"
          element={
            <>
              <ScrollToTop />
              <Coinfundr />
            </>
          }
        />

        <Route 
          path="/projects/eshopa"
          element={
            <>
              <ScrollToTop />
              <Eshopa />
            </>
          }
        />

        <Route 
          path="/projects/werb"
          element={
            <>
              <ScrollToTop />
              <Werb />
            </>
          }
        />

        <Route 
          path="/projects/quizzical"
          element={
            <>
              <ScrollToTop />
              <Quizzical />
            </>
          }
        />
      </Routes>

      <Footer />
    </>
  )
}