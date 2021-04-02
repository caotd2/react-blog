import '../../App.css'
import HeroSection from '../HeroSection'
import React from 'react'
import NavCards from '../NavCards'
import Footer from '../Footer'


function Home(){
    return(
        <>
            <HeroSection />
            <NavCards />
            <Footer />
        </>
        
    )
}

export default Home;