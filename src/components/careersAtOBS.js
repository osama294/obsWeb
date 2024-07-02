import { appIcons, appImages } from "@/assets/utilities";
import CareerCard from "./careerCards";
import React, { useState } from "react";
import Modal from 'react-modal';
import Image from "next/image";

const jobData = [
    {
        title: "REACT NATIVE DEVELOPER",
        image: appIcons.reactIcon,
        description: "Join our league of innovators as a React Native Developer and create high-performance mobile apps, while collaborating with our incredibly skilled design team.",
        jobApplication: "careers/jobs/react-native"
    },
    {
        title: "FRONT-END DEVELOPER",
        image: appIcons.jsFileIcon,
        description: "Collaborate with our visionary design squad to craft responsive and user-friendly experiences that thwart usability chaos and visual fragmentation.",
        jobApplication: '',
    },
    {
        title: "GRAPHIC DESIGNER",
        image: appIcons.careerIcon3,
        description: "Join the ranks amongst our creative crusaders to conjure top-notch visuals that leave no room for mediocrity and elevate brands to iconic status.",
        jobApplication: '',
    }
];

export default function CareersAtOBS() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (jobApplication) => {
        if (jobApplication == '') {
            console.log('Modal Open');
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col">
            <div className="flex-1">

                {/* Header */}
                <div className="lg:mt-10 xl:mt-10 mt-4 flex flex-row items-center w-[80%] self-center ml-[8%] lg:mb-10 xl:mb-10">
                    <Image width={48} height={2} alt='icon' src={appImages.headingDash} className='object-contain lg:h-[16px] xl:h-[16px] lg:w-[48px] xl:w-[48px] h-[9px] w-[38px] ' />
                    <span className="lg:text-[23px] xl:text-[25px]  text-obsGrey lg:ml-[22px] xl:ml-[22px] ml-[10px] font-semibold xl:font-normal lg:font-normal">
                        Our Careers
                    </span>
                </div>

                <div className=" mb-[13px] xl:mt-5 lg:mt-5 w-[80%] self-center ml-[8%]">
                    <span className="text-[#0B1215] lg:text-[36px] xl:text-[48px] text-[13px] font-semibold lg:mt-12 xl:mt-12">
                        With Great Talent, Comes <br className="hidden lg:block xl:block" />  <span className='text-obsYellow'>Great Opportunity</span>
                    </span>
                </div>

                {/* Top Text */}
                <div className=" lg:block xl:block hidden mb-[13px] lg:mt-0 xl:mt-0 w-[80%] self-center text-black xl:text-[15px] lg:text-[14px] ml-[8%] font-light leading-[30px]">
                    Put your powers to work by joining the ranks of our highly capable team in the following fields!
                </div>

                <div className="flex lg:flex-row xl:flex-row flex-col lg:w-[100%] xl:w-[100%] self-center lg:mt-0 xl:mt-0 lg:justify-evenly xl:justify-evenly items-center">
                    {jobData.map((job, index) => (
                        <CareerCard key={index} job={job} onClick={() => handleCardClick(job.jobApplication)} />
                    ))}
                </div>

                {/* <div className="lg:flex xl:flex hidden flex-row justify-center items-center lg:w-[100%] xl:w-[100%] lg:mt-[4%] xl:mt-[4%]">
                    <button className="w-[247px] h-[57px] rounded-[7px] border border-yellow-400">
                        <div className="w-[100%] text-center text-zinc-950 text-lg font-semibold font-['Poppins']">
                            See all openings
                        </div>
                    </button>
                </div> */}
            </div>

            {isModalOpen && (
                <div
                    onClick={() => setIsModalOpen(false)}
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-lg z-50"
                >
                    <div className="bg-white rounded-xl p-8 lg:h-[300px] xl:h-[300px] lg:w-[600px] xl:w-[600px] h-[250px] w-[360px] flex flex-col justify-center items-center">
                        <div className="text-yellow-400 lg:text-[42px] xl:text-[42px] text-[28px] font-semibold">
                            Sorry!
                        </div>

                        <div className="text-neutral-700 lg:text-[35px] xl:text-[35px] text-[20px] font-medium">
                            No Jobs Available Right Now!
                        </div>

                        <div className="text-neutral-700 lg:text-xl xl:text-xl text-[12px] lg:m2-0 xl:m2-0 mt-2 font-normal">
                            Try again When vacancies are available
                        </div>

                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="lg:w-[138px] xl:w-[138px] lg:h-[52px] xl:h-[52px] lg:px-0 xl:px-0 px-10 lg:py-0 xl:py-0 py-1 bg-yellow-400 rounded-xl mt-8"
                        >
                            <span className="text-neutral-700 lg:text-3xl xl:text-3xl text-[20px] font-medium">
                                OK
                            </span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
