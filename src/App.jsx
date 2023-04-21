import './app.css'
import Aos from 'aos';
import "aos/dist/aos.css";
import React from 'react';
import { useEffect } from 'react';
function App() {
  
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    <div data-aos='fade-in' className='app'>
      App
    </div>
  );
}

export default App;
