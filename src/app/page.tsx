'use client'
import { useAdvancedLayout } from '@/hooks/useAdvancedLayout';
import About from '@/components/aboutus';
import WhyPeopleTrust from '@/components/whyChooseUS';
import Appoinment from '@/components/appointment';
import Service from '@/components/services/index';
import TestimonialSlider from '@/components/testimonial';
import DoctorsTeam from '@/components/team/index';
import Navbar from '@/components/headers/heroSection'

function HomePage() {
    useAdvancedLayout('main', 'dark'); // Set layout and theme

    return <div>
        <Navbar/>
        <About/>
        <WhyPeopleTrust/>
        <Appoinment/>
        <Service/>
        <TestimonialSlider/>
        <DoctorsTeam/>
    </div>
}

export default HomePage;
