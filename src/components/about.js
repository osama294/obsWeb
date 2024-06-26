import Link from 'next/link';

export default function About() {
    return (
        <div className="flex flex-col py-1 lg:py-10 xl:py-16">
            {/* Column with 4 rows */}

            <div className="flex-1">
                <div className="lg:h-1/6 xl:h-1/6 h-[6%] mt-10 flex flex-row items-center w-[80%] self-center ml-[8%] xl:my-10 lg:my-10">
                    <div className="bg-[url('../assets/images/headingDash.png')] lg:h-[1px] xl:h-[1px] h-[1.3px] lg:w-[48px] xl:w-[48px] w-[25px]"></div>
                    <span className="lg:text-[22px] xl:text-[25px] text-obsGrey lg:ml-[20px] xl:ml-[20px] ml-[10px] font-semibold xl:font-normal lg:font-normal">About Us</span>
                </div>

                <div className="lg:h-1/5 xl:h-1/5 h-[8%] lg:w-[70%] xl:w-[70%] w-[90%] self-center ml-[8%] mt-3 lg:mt-0 xl:mt-0">
                    <span className="text-black lg:text-[36px] xl:text-[50px] text-[13px] lg:font-semibold xl:font-semibold font-semibold lg:leading-[35px] xl:leading-[70.50px] lg:tracking-wide xl:tracking-normal">
                        Unleash your company’s true potential with our crafty
                        {/* <br className='lg:hidden xl:hidden block' /> */}
                    </span>
                    <span className="text-yellow-400 lg:text-[36px] xl:text-[50px] text-[13px] font-semibold ml-2 lg:ml-2 xl:ml-2 lg:leading-[56px] xl:leading-[83.50px] lg:tracking-wide xl:tracking-wide">
                        digital products
                    </span>
                    <span className="text-black lg:text-[36px] xl:text-[50px] font-semibold lg:leading-[56px] xl:leading-[83.50px] lg:tracking-wide xl:tracking-wide">!</span>

                </div>
                <div className="lg:w-[70%] xl:w-[70%] w-[80%] self-center ml-[8%] mt-5 lg:mt-0 xl:mt-0 text-black text-[13px] lg:text-[23px] xl:text-[24px] font-medium lg:leading-[56px] xl:leading-[83.50px] lg:tracking-wide xl:tracking-wide">
                    Meet OBS Technologia, your tech superhero!
                </div>


                <div className="lg:h-1/5 xl:h-1/5 lg:w-[85%] xl:w-[85%] w-[85%] self-center ml-[8%] mt-3 lg:mt-3 xl:mt-3 lg:mb-[70px] xl:mb-12">
                    <p className="lg:leading-8 xl:leading-8 leading-relaxed lg:h-[148px] xl:h-[148px] text-black text-[10px] lg:text-[17px] xl:text-lg font-normal lg:text-left xl:text-left text-justify">
                        We’re one of the fastest-growing IT companies, saving the day with innovative solutions and services across industries all over the globe. From mobile apps to web apps and fin-tech magic, we have what it takes to create crafty solutions that make your life easier! Our clientage has grown exponentially within years as we have had the privilege of working with clients from America, Australia, Germany, United Kingdom, India, Russia, Saudi Arabia,  and the Central Republic of Africa. Our mission is to make tech accessible and affordable for all by creating user-friendly solutions that won’t break the bank.
                    </p>
                </div>

                <div className="lg:h-1/5 xl:h-1/5 lg:w-[80%] xl:w-[80%] flex lg:self-center xl:self-center ml-[8%]">
                    <Link href={'/hireUs'} className="
                        ml-[5px] mt-[13px] lg:ml-0 xl:ml-0 lg:mt-0 xl:mt-0 px-3 py-1 lg:w-48 xl:w-48 lg:h-[42px] xl:h-[42px] rounded-[4px] flex text-sm lg:text-lg xl:text-lg font-semibold border border-yellow-400 bg-white text-black justify-center items-center 
                        before:ease transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:-translate-x-1 before:rotate-6 before:bg-white before:opacity-15 before:duration-1000 hover:shadow-yellow-500 hover:before:-translate-x-48 hover:text-white hover:bg-yellow-400 overflow-hidden relative
                    ">
                        Hire Us
                    </Link>
                </div>
            </div>
        </div>
    )
}
