import CTA from "../components/CTA";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeNavbar from "../components/HomeNavbar";
import HomeProblem from "../components/HomeProblem";

function Home () {
    return (
        <div className="bg-base-300/80">
            <HomeNavbar />
            <Hero />
            <HomeProblem />
            <Features />
            <CTA />
            <Footer />
        </div>
    )
}

export default Home;