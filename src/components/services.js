import { appIcons, appImages } from '@/assets/utilities';
import Image from 'next/image';

export default function Services() {
    const CardData = [
        { id: 1, heading: 'Web Development', image: appIcons.webIcon, description: 'We design and develop high-performance websites that drive businesses to a brighter future.' },
        { id: 2, heading: 'Android/IOS Development', image: appIcons.mobileIcon, description: 'We offer end-to-end mobile app solutions, from design to development and maintenance.', },
        { id: 3, heading: 'Designing', image: appIcons.designingIcon, description: 'Without UI/UX, an application is like a shell without a soul. We craft visually appealing, user-centered digital experiences that attract and retain users.', },
        { id: 4, heading: 'SEO', image: appIcons.seoIcon, description: 'Proper SEO can boost a business’s growth. Our SEO expertise drives traffic and converts it into sales.', },
        { id: 5, heading: 'Digital Marketing', image: appIcons.marketingIcon, description: 'Our experts leverage PPC, SMM, and SMO to build trust, drive traffic and generate sales. Reach, engage, convert!', },
        { id: 6, heading: 'Other Services', image: appIcons.otherServicesIcon, description: 'That’s not all! We offer a wide range of services in various fields, all backed up by our commitment to reliability and top-notch quality.', },
    ];

    return (
        <div className="flex flex-col">
            <div className="flex-1 bg-stone-50 lg:py-0 xl:py-0 py-8">
                {/* Header */}
                <div className="lg:py-5 xl:py-5 flex flex-row items-center w-[80%] self-center ml-[8%] lg:mt-10 xl:mt-10">
                    <div className="bg-[url('../assets/images/headingDash.png')] lg:h-[1px] xl:h-[1px] h-[1.3px] lg:w-[48px] xl:w-[48px] w-[25px]"></div>
                    <span className="lg:text-[22px] xl:text-[24px] text-obsGrey lg:ml-[22px] xl:ml-[22px] ml-[10px] font-semibold xl:font-normal lg:font-normal">
                        Our Services
                    </span>
                </div>

                {/* Subheader */}
                <div className="lg:h-[98px] xl:h-[168px] mb-[13px] w-[80%] self-center ml-[8%]">
                    <span className="text-black lg:text-[36px] xl:text-[48px] text-[13px] font-semibold lg:mt-12 xl:mt-12 lg:mb-10">
                        Channelling <span className='text-obsYellow'>our superpowers</span> to deliver <br className='hidden lg:block xl:block' /> a comprehensive suite of services
                    </span>
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-3 mt-5 gap-8 w-[85%] xl:w-[85%] lg:w-[87%] self-center ml-[8%]">
                    {CardData.map((card) => (
                        <div
                            key={card.id}
                            className="flex flex-col justify-evenly xl:justify-center lg:justify-center lg:gap-3 xl:gap-3 py-2 lg:py-0 xl:py-0  items-center xl:items-start lg:items-start w-[95px] h-[90px] lg:w-[290px] xl:w-[360px] bg-white lg:h-[270px] xl:h-[327px] lg:shadow-[0px_0px_0px_0px_#00000024] xl:shadow-[0px_0px_0px_0px_#00000024] shadow-[-2px_3px_3px_-1px_#00000024] rounded-lg e lg:hover:shadow-[-11px_8px_27px_4px_#00000024] xl:hover:shadow-[-11px_8px_27px_4px_#00000024] lg:rounded-[30px] xl:rounded-[30px] lg:mb-8 xl:mb-8 xl:px-10 lg:px-10"
                        >
                            <Image
                                className={`w-[37px] h-[37px] lg:w-[60px] xl:w-[86px] lg:h-[60px] xl:h-[86px] `}
                                src={card.image}
                                alt={`${card.heading} Icon`}
                                width={90}
                                height={9}
                            />
                            <div className="  text-black lg:text-[15px] xl:text-[18px] text-[10px] text-center xl:text-start lg:text-start w-[60%] xl:w-[100%] lg:w-[100%] font-normal xl:font-medium lg:font-medium">
                                {card.heading}
                            </div>
                            <div className="xl:w-[287.11px] lg:w-[210px] lg:block xl:block hidden  text-black xl:text-[16px] lg:text-[12px] font-normal">
                                {card.description}
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
