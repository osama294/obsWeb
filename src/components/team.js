import { appImages } from "@/assets/utilities"
import Image from "next/image"

export default function TEAM() {

    const TeamMembers = [
        { id: 1, name: 'Hamza Bin Shiraz', designation: 'Business Analyst', image: appImages.teamHamzaPicture },
        { id: 2, name: 'Junaid Saeed', designation: 'Project Manager', image: appImages.teamJdPicture },
        { id: 3, name: 'Sharjeel Khan', designation: 'Full-Stack Developer', image: appImages.teamSharjeelPicture },
        { id: 4, name: 'Aadil Khan', designation: 'Back-End Developer', image: appImages.teamAadilPicture },
        { id: 5, name: 'M.Asjad Raja', designation: 'Front-End Developer', image: appImages.teamAsjadPicture },
    ]

    return (

        <div className="flex flex-col">

            <div className="flex-1 bg-stone-50">

                {/* Header */}
                <div className="lg:h-1/6 xl:h-1/6 h-[1%] lg:mt-10 xl:mt-10 mt-10 flex flex-row items-center w-[80%] self-center ml-[8%] xl:mb-10 lg:mb-10">
                    <Image width={48} height={2} alt='icon' src={appImages.headingDash} className='object-contain lg:h-[16px] xl:h-[16px] lg:w-[48px] xl:w-[48px] h-[9px] w-[38px] ' />
                    <span className="lg:text-[25px] xl:text-[25px] text-obsGrey  lg:ml-[22px] xl:ml-[22px] ml-[10px] font-semibold xl:font-normal lg:font-normal  ">
                        Our Team
                    </span>
                </div>

                {/* Subheader */}
                <div className=" mb-[13px] xl:mt-5 lg:mt-5 w-[80%] self-center ml-[8%]">
                    <span className="text-[#0B1215] lg:text-[36px] xl:text-[48px] text-[20px] font-semibold lg:mt-12 xl:mt-12">
                        <span className='text-obsYellow mr-2'>Our Top Talent</span>Heros Leading The Way
                    </span>
                </div>

                <div className="h-[50px] xl:hidden lg:hidden mb-[13px] text-[10px] lg:mt-0 xl:mt-0 w-[7x0%] self-center text-black xl:text-[18px] lg:text-[16px] ml-[8%] font-light lg:leading-[30px] xl:leading-[30px]">
                    Behold the driving forces behind our innovative solutions.
                </div>

                <div className="lg:hidden xl:hidden flex flex-col select-none items-center justify-center mb-10 gap-4">
                    <Image src={appImages.mobileResponsiveTeamImage} alt="Our Team" height={551} width={1152} className="w-[100%] h-[50%] object-contain" />

                    {/* <Image src={appImages.responsiveCEO} alt="Our Team" height={551} width={1152} className="w-[50%] h-[50%] object-contain" />
                    <Image src={appImages.responsiveHR} alt="Our Team" height={551} width={1152} className="w-[50%] h-[50%] object-contain" />
                    <Image src={appImages.responsivePM} alt="Our Team" height={551} width={1152} className="w-[50%] h-[50%] object-contain" /> */}
                </div>

                {/* My code */}
                <div className="h-[50px] hidden lg:block xl:block  mb-[13px] text-[9px] lg:mt-0 xl:mt-0 w-[70%] self-center text-black xl:text-[18px] lg:text-[16px] ml-[8%] font-light lg:leading-[30px] xl:leading-[30px]">
                    Behold the driving forces behind our innovative solutions.
                </div>

                <div className="lg:block xl:block hidden w-[84%] xl:h-[100%] lg:h-[100%] relative ml-[10%] select-none xl:pb-8 xl:mt-14 lg:my-5">
                    {/* <Image alt='teamImage' src={appImages?.teamDesktop} height={551} width={1152} className="w-full h-full object-contain" /> */}
                    <div className="flex flex-wrap justify-between after:">
                        {TeamMembers.map(member => (
                            <div key={member.id} className="w-[260px] overflow-hidden mb-8">
                                <div className="h-[300px] w-full relative flex items-end group">
                                    <div className="h-[85%] w-[45%] bg-[#9B9B9A] transition-all duration-700 ease-in-out group-hover:h-[100%] group-hover:bg-obsYellow" />
                                    <Image alt="teamMember" src={member.image} height={100} width={100} className="object-contain h-full w-[100%] transition-all duration-700 ease-in-out absolute group-hover:-translate-x-4" />
                                </div>

                                <div className=" w-full flex flex-col justify-center items-center gap-1 mt-4">
                                    <span className="font-semibold text-[#121212] text-[18px]">
                                        {member.name}
                                    </span>
                                    <div className="border border-b border-b-obsYellow w-[40%]" />
                                    <span className="font-normal text-[#0B1215] text-[13px]">
                                        {member.designation}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )
}
