import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <div id="home" className="bg-sky-950"> 
      <Header />
      <Hero />
      <Features />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default App;