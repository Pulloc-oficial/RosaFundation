import CallToAction from "./page1/callToAction";
import CardsSection from "./page1/cardSection";
import { ScrollProvider } from "./page1/context/scrollContext";
import Footer from "./page1/footer";
import Hero from "./page1/hero";
import Info from "./page1/info";
import PricingSection from "./page1/pricingSection";


const Page1 = () => {
    return (
        <div className="comic-neue-regular">
            <ScrollProvider>
                <Hero />
                <Info />
                <CardsSection />
                <PricingSection />
                <CallToAction /> 
                <Footer />
            </ScrollProvider>
        </div>
    );
};

export default Page1;
