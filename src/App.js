import logo from './logo.svg';
import './App.css';
import Herosection from './components/Herosection';
import ServiceSection from './components/ServiceSection';
import WhytoChoose from './components/WhytoChoose';
import OurDoctors from './components/OurDoctors';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Downloa from './components/Downloa';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Herosection />
     <ServiceSection />
     <WhytoChoose />
     <OurDoctors />
     <Features />
     <Testimonial />
     <Downloa />
     <Footer />
    </div>
  );
}

export default App;
