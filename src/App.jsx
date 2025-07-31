import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#10023f] to-[#300c92] text-white '>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App