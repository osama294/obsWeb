import { useEffect, useRef } from "react";
import Navbar from "./navbar";
import Link from 'next/link';
import Image from "next/image";
import { appIcons, appImages, svgImages } from "@/assets/utilities";

export default function Main() {

    const TextData = [{ id: 1, text: 'faster' }, { id: 2, text: 'with ease' }, { id: 3, text: 'efficiently' }];

    const scrollToRef = (refName) => {
        const ref = document.getElementById(refName);
        if (ref) {
            ref.scrollIntoView({ behavior: "smooth" });
        }
    };

    const textRefs = useRef([]);

    useEffect(() => {
        textRefs.current.forEach((ref, index) => {
            const delay = 900 * index; // Adjust the delay as needed
            setTimeout(() => {
                ref?.classList?.remove('opacity-0', 'translate-y-8');
            }, delay);
        });
    }, []);

    return (
        <>
            <div className="lg:max-w-full lg:overflow-hidden lg:h-screen lg:bg-cover lg:bg-no-repeat xl:max-w-full xl:overflow-hidden xl:h-screen xl:bg-cover xl:bg-no-repeat bg-cover overflow-auto bg-[url('../assets/images/mainBgScifi.png')]">
                <div className='flex flex-col lg:flex-row xl:flex-row justify-center lg:justify-between xl:justify-between lg:items-center xl:items-center items-center lg:mt-[200px] xl:mt-[200px] mt-[25%] '>
                    <span
                        className={`lg:text-[45px] xl:text-[70px] text-obsBlack ml-[3%] text-[35px] leading-[45px] text-center lg:text-left xl:text-left font-semibold lg:ml-[60px] xl:ml-[170px] lg:leading-[60.51px] xl:leading-[100.51px]`}
                    >
                        Manage your<br className="block " /> project <br className="block lg:hidden xl:hidden" />
                        <span className="text-obsYellow inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] lg:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] xl:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] overflow-hidden lg:ml-[17px] xl:ml-[17px]">
                            <ul className="lg:block xl:block lg:animate-text-slide-8 xl:animate-text-slide-6 -z-50 animate-text-slide-7 leading-tight [&_li]:block">
                                {
                                    TextData.map((item, index) => {
                                        return (
                                            <li key={index}>{item.text}</li>
                                        )
                                    })
                                }
                            </ul>
                        </span>
                        <p className="text-[#0B121580] text-[11px] lg:text-[16px] xl:text-[20px] font-normal -z-10 mt-5 lg:w-full xl:w-full w-[70%] lg:ml-0 xl:ml-0 ml-14 leading-[20px] lg:leading-[28px] xl:leading-[28px]">
                            Empowering your businesses with cutting-edge tech <br className="lg:block xl:block hidden" />
                            and supercharged solutions.
                        </p>
                    </span>
                    <Link href={'/hireUs'} className='border-[#FFD400] lg:hidden xl:hidden border-2 p-1 w-[97px] bg-[#FFD400] flex justify-center items-center font-sans text-sm antialiased font-extrabold leading-normal text-black rounded-md mt-5 '
                    >
                        Hire Us
                    </Link>
                    <div className="hidden lg:block xl:block lg:h-[500px] xl:h-[503px] xl:w-[710px] lg:w-[500px] relative">
                        <Image alt='laptopImage' src={svgImages.laptopBg} className="h-full object-contain w-full bg-no-repeat" height={200} width={200} />
                        <div
                            ref={(el) => (textRefs.current[0] = el)}
                            className="opacity-0 transform translate-y-8 transition-opacity duration-1000 absolute top-24 left-44 px-4 py-3 w-full">
                            <h1 className="text-[#00A7D9] lg:text-[35px] xl:text-[55px] font-[600]"> {`Rita's Ice`}</h1>
                        </div>
                        <div
                            ref={(el) => (textRefs.current[1] = el)}
                            className="opacity-0 transform translate-y-8 transition-opacity duration-1000 absolute top-44 left-44 px-4 py-3 w-full">
                            <h1 className="text-[#D72027] lg:text-[35px] xl:text-[55px] font-[600]"> Randox | Certifly</h1>
                        </div>
                        <div
                            ref={(el) => (textRefs.current[2] = el)}
                            className="opacity-0 transform translate-y-8 transition-opacity duration-1000 absolute top-64 left-44 px-4 py-3 w-full">
                            <h1 className="text-[#FFFFFF] lg:text-[35px] xl:text-[55px] font-[600]"> Jessop</h1>
                        </div>
                        <div
                            ref={(el) => (textRefs.current[3] = el)}
                            className="opacity-0 transform xl:translate-y-16 lg:translate-y-8 transition-opacity duration-1000 absolute bottom-32 left-44 px-4 py-3 w-full">
                            <h1 className="text-[#F66307] lg:text-[35px] xl:text-[55px] font-[600]"> BorrowVerse</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
