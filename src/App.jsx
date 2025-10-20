import React  from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'

import Portfolio from './components/portfolio/Portfolio'

import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { useContext} from "react";
import { themeContext } from './Context';
import Services from './components/services/Services'
import CircleCursor from './components/cursor'




const App = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;




  return (
    <div className='contain'
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
    >
     <CircleCursor/>
      <Header />
      <Nav />
      <About  />
      <Experience  />
      <Services/>
      <Portfolio />
      <Contact  />
      <Footer />
    </div>
  )
}


export default App
