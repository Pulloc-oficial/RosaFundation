import CallToAction from "./page1/home/callToAction.tsx";
import CardsSection from "./page1/home/cardSection.tsx";
import { ScrollProvider } from "./page1/context/scrollContext.tsx";
import Footer from "./page1/home/footer.tsx";
import Hero from "./page1/home/hero.tsx";
import Info from "./page1/home/info.tsx";
import PricingSection from "./page1/home/pricingSection.tsx";


const Page1 = () => {
    return (
        <div className="">
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
