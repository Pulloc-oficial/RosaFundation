import CardsSection from "./page1/home/cardSection.tsx";
import { ScrollProvider } from "./page1/context/scrollContext.tsx";
import Footer from "./page1/home/footer.tsx";
import Hero from "./page1/home/hero.tsx";
import Info from "./page1/home/info.tsx";
import GallerySection from "./page1/home/gallerySection.tsx";
import ContactSection from "./page1/home/contactSection.tsx";
import MapSection from "./page1/home/mapSection.tsx";
import InspiracionSection from "./page1/home/inspiracionSection.tsx";


const Page1 = () => {
    return (
        <div className="">
            <ScrollProvider>
                <Hero />
                <Info />
                <CardsSection />
                <GallerySection />
                <InspiracionSection />
                <MapSection /> 
                <ContactSection />
                <Footer />
            </ScrollProvider>
        </div>
    );
};

export default Page1;
