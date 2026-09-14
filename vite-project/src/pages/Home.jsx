import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import Pricing from '../components/Pricing.jsx'
import About from '../components/About.jsx'
import Gallery from '../components/Gallery.jsx'
import Testimonials from '../components/Testimonials.jsx'
import ContactSection from '../components/ContactSection.jsx'
import WaveDivider from '../components/WaveDivider.jsx'

function Home() {
  return (
    <>
      <Hero />
      <WaveDivider fromColor="#0b3142" toColor="#f6faf9" />
      <Services />
      <Pricing />
      <About />
      <WaveDivider fromColor="#f6faf9" toColor="#0b3142" />
      <Gallery />
      <Testimonials />
      <ContactSection />
    </>
  )
}

export default Home
