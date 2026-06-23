import About from "./components/About"
import Consult from "./components/Consult"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Pricing from "./components/Pricing"
import Project from "./components/Projects"
import Services from "./components/Services"

export default function LandingPage (){

    return(
        <section>
            <section id="" >
                <HeroSection />
            </section>
            <section id="services" >
                <Services />
            </section>
            <section id="gallery" >
                <Project />
            </section>
            <section id="pricing" >
                <Pricing />
            </section>
            <section id="why" >
                <About />
            </section>
            <section id="consult" >
                <Consult />
            </section>
            <Footer />
        </section>
    )
}