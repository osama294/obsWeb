import { appImages } from "@/assets/utilities"
import Image from "next/image"

export default function TEAM() {

    return (

        <div className="flex flex-col">

            <div className="flex-1 bg-stone-50">

                {/* Header */}
                <div className="lg:h-1/6 xl:h-1/6 h-[1%] lg:mt-10 xl:mt-10 mt-10 flex flex-row items-center w-[80%] self-center ml-[8%] xl:mb-10 lg:mb-10">
                    <div className="bg-[url('../assets/images/headingDash.png')] lg:h-[1px] xl:h-[1px] h-[1.3px] lg:w-[48px] xl:w-[48px] w-[25px]  "></div>
                    <span className="lg:text-[25px] xl:text-[25px] text-obsGrey  lg:ml-[22px] xl:ml-[22px] ml-[10px] font-semibold xl:font-normal lg:font-normal  ">
                        Our Team
                    </span>
                </div>

                {/* Subheader */}
                <div className=" mb-[13px] xl:mt-5 lg:mt-5 w-[80%] self-center ml-[8%]">
                    <span className="text-[#0B1215] lg:text-[36px] xl:text-[48px] text-[13px] font-semibold lg:mt-12 xl:mt-12">
                        <span className='text-obsYellow mr-2'>Our Top Talent</span>Heros Leading The Way
                    </span>
                </div>

                <div className="lg:hidden xl:hidden flex flex-col select-none items-center justify-center mb-10 gap-4">
                    <Image src={appImages.responsiveCEO} alt="Our Team" height={551} width={1152} className="w-[50%] h-[50%] object-contain" />
                    <Image src={appImages.responsiveHR} alt="Our Team" height={551} width={1152} className="w-[50%] h-[50%] object-contain" />
                    <Image src={appImages.responsivePM} alt="Our Team" height={551} width={1152} className="w-[50%] h-[50%] object-contain" />
                </div>

                {/* My code */}
                <div className="h-[50px] lg:block xl:block  mb-[13px] text-[9px] lg:mt-0 xl:mt-0 w-[70%] self-center text-black xl:text-[18px] lg:text-[16px] ml-[8%] font-light lg:leading-[30px] xl:leading-[30px]">
                    Behold the driving forces behind our innovative solutions.
                </div>

                <div className="lg:block xl:block hidden w-[84%] xl:h-[100%] lg:h-[100%] relative ml-[10%] select-none xl:pb-8 xl:mt-14 lg:my-5">
                    <Image alt='teamImage' src={appImages?.teamDesktop} height={551} width={1152} className="w-full h-full object-contain" />
                </div>


            </div>
        </div>
    )
}
