import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { appImages } from '../assets/utilities';
import { scroller, Link as ScrollLink } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar({ position }) {
    const NavItem = [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'About',
            url: '#about',
        },
        {
            name: 'Service',
            url: '#services',
        },
        {
            name: 'Careers',
            url: '/careers',
        },
        {
            name: 'Portfolio',
            url: '/portfolio',
        },
    ];

    const [activeLink, setActiveLink] = useState('/');
    const [nav, setNav] = useState(false);

    // const handleLinkClick = (url) => {
    //     setActiveLink(url);
    //     // Close the mobile menu when a link is clicked
    //     setShowMobileMenu(false);
    // };

    const handleNav = () => {
        setNav(!nav);
        // Toggle mobile menu visibility
        setShowMobileMenu(!showMobileMenu);
    };

    useEffect(() => {
        // Update the active link state after the component has rendered
        setActiveLink(window.location.pathname);
    }, []);

    const [showMobileMenu, setShowMobileMenu] = useState(false);



    const handleLinkClick = (url) => {
        const isHomePage = window.location.pathname === '/';
        if (url.startsWith('#')) {
            const section = url.substring(1);
            if (isHomePage) {
                scroller.scrollTo(section, {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart'
                });
            } else {
                setActiveLink('/');
                setShowMobileMenu(false);
                window.location.href = `/?scrollTo=${section}`;
            }
        } else {
            setActiveLink(url);
            setShowMobileMenu(false);
        }
    };

    return (
        <nav className={`w-[100%] lg:px-[45px]  xl:px-[168px] px-0 pt-10 lg:pt-[49px] xl:pt-[49px] ${position} `}>
            <div className="flex items-center justify-between ">

                <Link href={'/'} >
                    <Image alt="NavBarlogo" src={appImages.NavBarLogo} className="lg:h-14 xl:h-14 lg:w-24 xl:w-24 h-[37px] w-[60px] ml-6 lg:ml-0 xl:ml-0" />
                </Link>
                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className='block lg:hidden xl:hidden ml-[63%]'>
                    {showMobileMenu ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={28} />}
                </div>

                <div className="xl:block lg:block">
                    <ul className="lg:flex xl:flex hidden lg:gap-3 xl:gap-3 lg:my-2 xl:my-2 lg:mb-0 xl:mb-0 lg:mt-0 xl:mt-0 lg:flex-row xl:flex-row lg:items-center xl:items-center ">
                        {NavItem.map((navItem, index) => (
                            <li
                                key={index}
                                className={`lg:block xl:block lg:text-[15px] xl:text-[18px] text-[18px] lg:p-1 xl:p-1 antialiased font-medium leading-normal transition-all duration-100 border-transparent border-1 cursor-pointer ${activeLink === navItem.url ? 'border-yellow-400 border-b-2 ' : ''}`}
                            >
                                {navItem.url.startsWith('#') ? (
                                    <a onClick={() => handleLinkClick(navItem.url)} className="flex items-center transition-colors text-black xl:text-[16px] lg:text-[16px]">
                                        {navItem.name}
                                    </a>
                                ) : (
                                    <Link onClick={() => handleLinkClick(navItem.url)} href={navItem.url} className="flex items-center transition-colors text-black xl:text-[16px] lg:text-[16px]">
                                        {navItem.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <Link
                    href={'/hireUs'}
                    className='hidden border-yellow-400 border-2 p-1 w-36 bg-yellow-400 rounded-[7px] lg:flex xl:flex justify-center items-center font-sans text-sm antialiased font-medium leading-normal text-white hover:bg-transparent hover:text-obsYellow '
                >
                    Hire Us
                </Link>
            </div>

            {/* Mobile Navigation Menu */}
            {showMobileMenu && (
                <ul className="lg:hidden xl:hidden bg-stone-50">
                    {NavItem.map((navItem, index) => (
                        <li
                            key={index}
                            className={`p-4 ml-[7%] rounded-xl text-gray-600 duration-300`}
                        >
                            {navItem.url.startsWith('#') ? (
                                <a onClick={() => handleLinkClick(navItem.url)} className="flex items-center transition-colors text-black xl:text-[16px] lg:text-[16px]">
                                    {navItem.name}
                                </a>
                            ) : (
                                <Link onClick={() => handleLinkClick(navItem.url)} href={navItem.url}>
                                    {navItem.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
