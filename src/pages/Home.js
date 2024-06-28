import About from '@/components/about';
import CareersAtOBS from '@/components/careersAtOBS';
import ClientsReviews from '@/components/clientsReviews';
import ContactUs from '@/components/contactUs';
import Footer from '@/components/footer';
import Main from '@/components/main';
import Navbar from '@/components/navbar';
import PortfolioSlider from '@/components/portfolioSlider';
import Services from '@/components/services';
import TEAM from '@/components/team';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import { Element, scroller } from 'react-scroll';

const HomePage = () => {


    // const sections = [
    //     'main',
    //     'about',
    //     'services',
    //     'portfolio',
    //     'reviews',
    //     'careers',
    //     'team',
    //     'contact',
    //     'footer',
    // ];

    // const [currentSection, setCurrentSection] = useState(sections[0]);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollPosition = window.scrollY;
    //         const windowHeight = window.innerHeight;

    //         // Calculate the current section based on the scroll position
    //         const currentSectionIndex = Math.floor(scrollPosition / windowHeight);
    //         const newSection = sections[currentSectionIndex];

    //         if (newSection !== currentSection) {
    //             setCurrentSection(newSection);
    //         }
    //     };

    //     // Attach the scroll event listener
    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         // Remove the scroll event listener on component unmount
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // },);



    // const scrollNextSection = () => {
    //     const currentIndex = sections.indexOf(currentSection);
    //     const nextIndex = currentIndex + 1;

    //     if (nextIndex < sections.length) {
    //         const nextSection = sections[nextIndex];
    //         scroller.scrollTo(nextSection, {
    //             duration: 300,
    //             smooth: true,
    //             offset: 0, // Adjust offset as needed
    //         });
    //     }
    // };


    // const scrollPrevSection = () => {
    //     const currentIndex = sections.indexOf(currentSection);
    //     if (currentIndex >= 0) {
    //         const previousSection = sections[currentIndex];
    //         scroller.scrollTo(previousSection, {
    //             duration: 300,
    //             smooth: true,
    //             offset: 0, // Adjust offset as needed
    //         });
    //     }
    // };

    // const handleScroll = (e) => {
    //     const delta = e.deltaY || e.detail || (-e.wheelDelta);
    //     if (delta < 0) {
    //         console.log("DELTA ====", delta)
    //         scrollPrevSection();
    //     } else {
    //         console.log("DELTA ====", delta)
    //         scrollNextSection();
    //     }
    // };

    // useEffect(() => {
    //     // Attach the wheel event listener for scrolling
    //     window.addEventListener('wheel', handleScroll);

    //     return () => {
    //         // Remove the wheel event listener on component unmount
    //         window.removeEventListener('wheel', handleScroll);
    //     };
    // },);


    const router = useRouter();
    const { scrollTo } = router.query;

    useEffect(() => {
        if (scrollTo) {
            scroller.scrollTo(scrollTo, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
    }, [scrollTo]);


    return (
        <>
            <Navbar position={'absolute'} />

            <Main />

            <Element name="about">
                <About />
            </Element>

            <Element name="services">
                <Services />
            </Element>

            <PortfolioSlider />

            <ClientsReviews />

            <CareersAtOBS />

            <TEAM />

            <ContactUs />

            <Footer />

        </>
    );
};

export default HomePage;