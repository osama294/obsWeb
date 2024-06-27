import { appIcons } from "@/assets/utilities";
import Image from 'next/image'
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";


const ReviewData = [
    { id: 1, clientName: 'NFL', reviewDetail: 'OBS Technologia team has an extremely well-rounded skill set across IOS and Android mobile app development. The team was able to successfully bring my designs to life, within IOS and Android domain; by turning my wireframes and requirements into apps. ' },
    { id: 2, clientName: 'PARTY', reviewDetail: 'We have been working with OBS Technologia for the third time. The team consists of very good and competent individuals. The work is carried out quickly and accurately on time. Very satisfied with this team’s work, and we hope to work more in the future. We recommend team OBS Technologia. ' },
    { id: 3, clientName: 'WARAKA', reviewDetail: "Osama and his team did a great job. They were able to build the app according to my specifications. We didn't complete the project on time; however, they communicated with me ahead of time so that I knew that I could expect delays but other than that, job well done. Best of luck team OBS Technologia!" },
    { id: 4, clientName: 'PAYFRAN', reviewDetail: 'Osama and company always get the job done! They worked on this project diligently and delivered a great product, as they always do. Osama is a good hire and an intelligent young man. He and his team work together to achieve the goals and like always, the result is amazing.' },
    { id: 5, clientName: 'FLASHMATH', reviewDetail: 'Team OBS Technologia is an exceptional talent. They know what they are doing and are very responsive. They were able to build the two apps that I needed for iOS and Android. The end product was the same as promised. I would recommend them to meet your IT needs. I will most definitely be using them again! ' },
    { id: 6, clientName: 'VORIDES', reviewDetail: 'Based on my working experience with OBS Technologia team, I will always recommend this team of talented developers. They are very smart and assist well in the brainstorming process. The team was able to work with me from design to final product.' },
    { id: 7, clientName: 'CASHME', reviewDetail: 'Osama kept in regular contact and was clear from the beginning, about the capabilities of his team. Not only his team is proficient in developing mobile applications, but the graphic design skillset was clear in the UI/UX which was suggested by the team.' },
]


const ReviewCard = ({ item }) => {


    return (

        <div className="md:w-[515px] w-[200px] h-[240px]  md:h-[368px] bg-white md:rounded-[20px] md:mb-0 mb-4 rounded-[10px] drop-shadow-lg  mx-5 p-5 md:p-5 justify-center items-center ">

            <div className="flex justify-center items-center ">
                <Image
                    className="md:w-[156px] w-[37px] h-[6px] md:h-[26px]"
                    src={appIcons.reviewStarIcon}
                    alt={`Star Icon`}
                    width={156}
                    height={26}
                />
            </div>

            <div className="md:text-center text-black md:text-[14px] text-[10px] font-normal md:leading-[35px] my-2 md:my-8 md:px-6 select-none">
                {item.reviewDetail}
            </div>

            <div className="text-center text-black md:text-[22px] text-[13px] font-bold select-none">
                {item.clientName}
            </div>
        </div >
    );
}


export default function ClientsReviews() {


    const [speed, setSpeed] = useState(80); // Default speed for web

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
        <div className="flex flex-col bg-stone-50 ">
            <div>

                <div >
                    {/* Header */}
                    <div className=" md:mt-10 mt-4 flex flex-row items-center w-[80%] self-center ml-[8%] ">
                        <div className="bg-[url('../assets/images/headingDash.png')] md:h-[1px] h-[1.3px] md:w-[48px] w-[25px]  "></div>
                        <span className="md:text-[25px] text-obsGrey md:ml-[22px] ml-[10px] font-semibold xl:font-normal lg:font-normal">
                            Our Testimonials
                        </span>
                    </div>
                    {/* Subheader */}
                    <div className="lg:h-[98px] xl:h-[70px] mb-[13px] xl:mt-5 lg:mt-5 w-[80%] self-center ml-[8%]">
                        <span className="text-black lg:text-[36px] xl:text-[48px] text-[13px] font-semibold lg:mt-12 xl:mt-12">
                            The League of   <span className='text-obsYellow'>Satisfied Clients</span>
                        </span>
                    </div>
                </div>

                <div className="h-[10px] lg:block xl:block hidden mb-[5px] lg:mt-5 xl:mt-6 w-[75%] self-center text-black xl:text-[18px] lg:text-[16px] ml-[8%] font-light leading-[30px]">
                    {` We, the digital avengers, save the day by creating crafty solutions to business mysteries with our exceptional skills. Our clients' success stories speak volumes about our commitment to customer satisfaction. Choose OBS Technologia with confidence.`}
                </div>


                {/* Review Div*/}

                <div className="flex justify-center w-[100%] md:h-[675px] py-5 md:py-0    ">
                    <div className="md:w-[100%]   md:h-full  md:absolute " />

                    <Marquee
                        speed={speed}
                        pauseOnHover={true}
                    >
                        {ReviewData.map((item) => (
                            <ReviewCard key={item.id} item={item} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );

}