import About from './sections/About';
import Faq from './sections/Faq';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Partners from './sections/Partners';
import Schedule from './sections/Schedule';
import VenueMap from './sections/VenueMap';

const App = () => {
  return (
    <main>
      <Hero />
      <About />
      <Schedule />
      <Partners />
      <VenueMap />
      <Faq />
      <Footer />
    </main>
  );
};

export default App;
