import Homepage from './pages/Homepage';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";


function App() {

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    <Homepage/>
  );
}

export default App;
