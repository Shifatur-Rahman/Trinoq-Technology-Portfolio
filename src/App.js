import React from "react";
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Services";
import CountSection from "./components/CountSection/CountSection";
import Portfolio from "./components/Portfolio/Portfolio";
import GetSolution from "./components/GetSolution/GetSolution";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Contact from "./components/Contact/Contact";
import OurTeam from "./components/OurTeam/OurTeam";
import Footer from "./components/Footer/Footer";
import ClientTestimonial from "./components/ClientTestimonial/ClientTestimonial";

function App() {
  return (
    <div className='App'>
      <TopNavigation />
      <TopBanner />
      <Services />
      <CountSection />
      <GetSolution />
      <Portfolio />
      <ClientTestimonial />
      <OurTeam />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
