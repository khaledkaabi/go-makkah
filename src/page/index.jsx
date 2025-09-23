import AboutSection from "../components/aboutSection";
import AccompagnSection from "../components/accompagnSection";
import ContextSection from "../components/contextSection";
import DiscoverSection from "../components/discoverSection";
import Footer from "../components/footer";
import FooterBottom from "../components/footerBottom";
import FormuleSection from "../components/formuleSection";
import ProcessSection from "../components/processSection";
import RecomendationSection from "../components/recomendationSection";
import SolutionSection from "../components/solutionSection";
import WhyGomakkah from "../components/whyGomakkah";

const Home = () => {

    return (
        <>
            <div className='md:min-h-[300px] border-t border-gray-100'>
                <img className='md:w-full md:h-full' src='/home-section-1.png' />
            </div>
            <ContextSection />
            <SolutionSection />
            <ProcessSection />
            <DiscoverSection />
            <AccompagnSection />
            <FormuleSection />
            <WhyGomakkah />
            <RecomendationSection />
            <AboutSection />
            <Footer />
            <FooterBottom />
        </>
    )
}
export default Home;