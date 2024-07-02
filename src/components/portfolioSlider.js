import { appIcons, appImages } from '@/assets/utilities';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function PortfolioSlider() {

    const SliderData = [
        // { id: 1, image: appImages.portfolioSlider1 },
        { id: 1, image: appImages.portfolioSlider2 },
        { id: 2, image: appImages.portfolioSlider3 },
        { id: 3, image: appImages.portfolioSlider4 },
        { id: 4, image: appImages.portfolioSlider5 },
        { id: 5, image: appImages.portfolioSlider6 },
        { id: 6, image: appImages.portfolioSlider7 },
        { id: 7, image: appImages.portfolioSlider8 },
        { id: 8, image: appImages.portfolioSlider9 },
        { id: 9, image: appImages.portfolioSlider10 },
        { id: 10, image: appImages.portfolioSlider11 },
        // { id: 12, image: appImages.portfolioSlider12 },
        { id: 11, image: appImages.portfolioSlider13 },
        { id: 12, image: appImages.portfolioSlider14 },
        { id: 13, image: appImages.portfolioSlider15 },
        { id: 14, image: appImages.portfolioSlider16 },
        { id: 15, image: appImages.portfolioSlider17 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % SliderData.length);
        }, 3000); // Change this value to adjust the autoplay interval

        return () => clearInterval(timer);
    }, [currentIndex, SliderData.length]);


    const [speed, setSpeed] = useState(120); // Default speed for web

    useEffect(() => {
        const updateSpeed = () => {
            if (window.innerWidth <= 768) {
                setSpeed(40); // Speed for mobile
            } else {
                setSpeed(120); // Speed for web
            }
        };

        window.addEventListener('resize', updateSpeed);
        updateSpeed(); // Set initial speed

        return () => window.removeEventListener('resize', updateSpeed);
    }, []);



    return (
        <div className="flex flex-col  py-2 lg:py-10 xl:py-10 ">
            <div className="flex-1">
                {/* Header */}
                <div className="lg:mt-0 xl:mt-0 mt-4 flex flex-row items-center w-[80%] self-center ml-[8%]">
                    <Image width={48} height={2} alt='icon' src={appImages.headingDash} className='object-contain lg:h-[16px] xl:h-[16px] lg:w-[48px] xl:w-[48px] h-[9px] w-[38px] ' />
                    <span className="lg:text-[24px] xl:text-[28px] text-obsGrey lg:ml-[22px] xl:ml-[22px] ml-[10px] font-semibold xl:font-normal lg:font-normal">
                        Our Portfolio
                    </span>
                </div>
                <div className="lg:h-[98px] xl:h-[70px] mb-[13px] xl:mt-5 lg:mt-5 w-[80%] self-center ml-[8%]">
                    <span className="text-black lg:text-[36px] xl:text-[48px] text-[13px] font-semibold lg:mt-12 xl:mt-12">
                        Missions  <span className='text-obsYellow'>Accomplished</span>!
                    </span>
                </div>

                {/* Top Text */}
                <div className="h-[120px] lg:block xl:block hidden mb-[13px] lg:mt-0 xl:mt-0 w-[80%] self-center text-black xl:text-[18px] lg:text-[16px] ml-[8%] font-light leading-[30px]">
                    Take a look at how our digital exploits have come to life. Our highly equipped heroes make apps that rescue users from boredom by creating solutions that vanquish business challenges. Our extensive portfolio showcases the legendary work of our team.
                </div>

                <Marquee speed={speed} pauseOnHover={true}>
                    <div className="flex lg:hidden xl:hidden xl:h-[445px] lg:h-[445px] xl:mt-[77px] lg:mt-[44px] mt-10 xl:w-[100%] lg:w-[100%] self-center py-2">
                        {SliderData.map((item, index) => {
                            return (
                                <div key={index} className="mx-3">
                                    <Image src={item.image} alt={`Slider ${item.id}`} className="xl:h-[445px] lg:h-[445px] h-[128px] w-[100px] object-contain drop-shadow-lg" width={329} height={408} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="xl:flex lg:flex hidden xl:h-[445px] lg:h-[350px] xl:mt-[77px] lg:mt-[77px] xl:w-[100%] lg:w-[100%] self-center py-10">
                        {SliderData.map((item, index) => {
                            return (
                                <div key={index} className="mx-3">
                                    <Image src={item.image} alt={`Slider ${item.id}`} className="h-full w-full object-contain  drop-shadow-lg  rounded-[15px]" width={'5%'} height={'100%'} />
                                </div>
                            );
                        })}
                    </div>
                </Marquee>

                <div className="xl:h-1/4 lg:h-1/4 flex flex-row xl:my-0 lg:my-0 my-5 items-center w-[80%] self-center ml-[8%] justify-center">
                    <Link href={'/portfolio'} className="xl:w-44 lg:w-44 xl:h-[42px] lg:h-[42px] h-[18px] xl:py-0 lg:py-0 py-3 xl:px-0 lg:px-0  rounded-[7px] border border-yellow-400 flex justify-center items-center text-center bg-obsYellow text-white xl:text-[16px] lg:text-[16px] text-[12px] px-5 font-semibold hover:bg-yellow-400 hover:text-white
                           before:ease transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:-translate-x-[-30px] before:rotate-6 before:bg-white before:opacity-15 before:duration-1000 hover:shadow-yellow-500 hover:before:-translate-x-48 overflow-hidden relative">
                        View All
                    </Link>
                </div>
            </div>
        </div>
    );
}
