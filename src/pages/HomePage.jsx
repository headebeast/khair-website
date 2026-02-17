import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Testimonials from '../components/Testimonials/Testimonials';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features />
                <HowItWorks />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
