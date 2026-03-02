import HeroSection from "../sections/HeroSection.jsx";
import ProductionSection from "../sections/ProductionSection.jsx";
import ProductsSection from "../sections/ProductsSection.jsx";
import HowItWorksSection from "../sections/HowItWorksSection.jsx";
import ContactSection from "../sections/ContactSection.jsx";

const Home = () => {
  return (
      <section className='section'>
        <HeroSection />
        <ProductionSection />
        <ProductsSection />
        <HowItWorksSection />
        <ContactSection />
      </section>
  )
}

export default Home
