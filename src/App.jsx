import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Loading from './components/Loading';
import { useEffect, useState } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div> 
    {isLoading ? (
      <Loading />
    ) : (
      <div id="home" className="bg-sky-950">
        <Header />
        <Hero />
        <Features />
        <AboutUs />
        <Footer />
      </div>
    )}
    </div>
  )
}

export default App;