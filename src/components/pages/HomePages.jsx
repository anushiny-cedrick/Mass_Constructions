import React from 'react'
import Navbar from '../NavBar/Navbar'
import HeroSection from '../Hero/HeroSection'
import TechnologySection from '../TechnologySection/TechnologySection'
import ServicesSection from '../ServicesSection/ServicesSection'
import DesignShowcase from '../DesignShowcase/DesignShowcase'
import TestimonialSection from '../TestimonialSection/TestimonialSection'


const HomePages = () => {
    return (
        <div>
            <HeroSection />
            <DesignShowcase />
            <ServicesSection />
            <TechnologySection />
            <TestimonialSection />


        </div>
    )
}

export default HomePages
