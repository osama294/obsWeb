import { appIcons, appImages } from "@/assets/utilities";
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <div className="flex flex-col lg:h-[500px] xl:h-[600px]">
            <div className="flex-1 lg:col-span-3 xl:col-span-3 bg-stone-50 lg:px-[5%] xl:px-[8%] px-[4%] lg:py-0 xl:py-0 py-8 ">
                {/* Logo */}
                <Link href={'/'} >
                    <div className="h-1/5 flex items-end mt-4">
                        <Image src={appImages.NavBarLogo} alt="OBS LOGO" height={54} width={96} className="lg:h-[45px] xl:h-[54px] lg:w-[80px] xl:w-[96px] h-[26px] w-[48px] " />
                    </div>
                </Link>

                {/* Middle Two Columns */}
                <div className="h-2/4 col-span-2 flex">
                    <div className="h-[100%] w-[50%]  pl-2">
                        <div className="lg:w-[382px] xl:w-[382px] lg:h-[93.75px] xl:h-[93.75px] lg:mb-[9%] xl:mb-[9%] lg:py-10 xl:py-10 lg:mt-[5%] xl:mt-[5%] mt-[16%]">
                            <span className="text-black lg:text-[29px] xl:text-[39px] text-[18px] font-medium lg:font-medium xl:font-medium lg:leading-[42px] xl:leading-[42px]">
                                lets create progress
                            </span>
                            <span className="text-yellow-400 lg:text-[29px] xl:text-[39px] text-[18px] font-medium lg:font-medium xl:font-medium lg:leading-[37px] xl:leading-[37px] ml-2">
                                together<br />
                            </span>
                        </div>
                        <Link href={'/hireUs'} className='border-yellow-400 border-2 p-1 lg:w-[97px] xl:w-[97px] w-[55px] bg-yellow-400 lg:mt-0 xl:mt-0 mt-7 flex justify-center items-center font-sans lg:text-sm xl:text-sm text-[10px] antialiased font-extrabold leading-normal text-black'>
                            Hire Us
                        </Link>
                    </div>

                    {/* Location and Social */}
                    <div className="h-[100%] w-[50%] lg:ml-0 xl:ml-0 ml-7 flex flex-col ">
                        <div className="flex-1">
                            {/* Content for the first row */}
                        </div>

                        <div className="flex-col flex   gap-0">
                            <div className="flex items-center  mt-5">
                                <Image src={appIcons.locationIcon} alt="location Icon" className="lg:h-[25px] xl:h-[25px] lg:w-[25px] xl:w-[25px] h-[15px] w-[15px]" height={24} width={24} />
                                <span className="text-black lg:text-[13px] xl:text-[17px] text-[9px] font-normal ml-4">
                                    Fazal Software Technology Park, I-9/3, Office # 01
                                </span>
                            </div>

                            <div className="flex items-center my-2 ">
                                <Image src={appIcons.phoneIcon} alt="phone Icon" className="lg:h-[25px] xl:h-[25px] lg:w-[25px] xl:w-[25px] h-[15px] w-[15px]" height={24} width={24} />
                                <span className="text-black lg:text-[13px] xl:text-[17px] text-[9px] font-normal ml-4">
                                    +92 51 8893644
                                </span>
                            </div>

                            <div className="flex items-center ">
                                <Image src={appIcons.mailIcon} alt="mail Icon" className="lg:h-[25px] xl:h-[25px] lg:w-[25px] xl:w-[25px] h-[15px] w-[15px]" height={24} width={24} />
                                <span className="text-black lg:text-[13px] xl:text-[17px] text-[9px] font-normal ml-4">
                                    Ceo@obstechnologia.com || hr@obstechnologia.com
                                </span>
                            </div>
                        </div>

                        <div className="flex-1 relative lg:top-[60px] xl:top-[60px] ">
                            <div className="absolute lg:bottom-0 xl:bottom-0 lg:left-[230px] xl:left-[350px] lg:p-4 xl:p-4 lg:pt-0 xl:pt-0 pt-5  top-9 left-12">
                                <div className="flex items-center lg:gap-4 xl:gap-4 justify-between gap-1">
                                    <Link href={'https://www.facebook.com/obstechnologia'} target="_blank">
                                        <Image alt="facebook Icon" src={appIcons.facebookIcon} className="lg:h-[29px] xl:h-[39px] lg:w-[29px] xl:w-[39px] h-[18px] w-[20px]" height={39} width={39} />
                                    </Link>
                                    <div className="lg:w-[19.50px] xl:w-[19.50px] w-3 lg:h-[0px] xl:h-[0px] h-[1px] origin-top-left rotate-90 opacity-10 lg:border-2 xl:border-2 border border-black ml-[5px] mb-[10px]"></div>
                                    <Link href={'https://www.instagram.com/obstechnologia/'} target="_blank">
                                        <Image alt="instagram Icon" src={appIcons.instagramIcon} className="lg:h-[29px] xl:h-[39px] lg:w-[29px] xl:w-[39px] h-[18px] w-[20px]" height={39} width={39} />
                                    </Link>
                                    <div className="lg:w-[19.50px] xl:w-[19.50px] w-3 lg:h-[0px] xl:h-[0px] h-[1px] origin-top-left rotate-90 opacity-10 lg:border-2 xl:border-2 border border-black ml-[5px] mb-[10px]"></div>
                                    <Link href={'https://www.linkedin.com/company/obs-technologia/'} target="_blank">
                                        <Image alt="LinkedIn Icon" src={appIcons.linkedinIcon} className="lg:h-[29px] xl:h-[39px] lg:w-[29px] xl:w-[39px] h-[18px] w-[20px]" height={39} width={39} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1">
                            {/* Content for the fourth row */}
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="h-[1%] flex justify-center items-end lg:mt-[10%] xl:mt-[10%] mt-12">
                    <div className="text-black lg:text-[13px] xl:text-[17px] text-[9px] font-normal mt-5 ">
                        @2022 FUTURE, OBS Technologia, All Rights Reserved
                    </div>
                </div>
            </div>
        </div>
    );
}
