import { appIcons } from "@/assets/utilities";
import Image from 'next/image';
import { Children, useState } from 'react';
import ReactCardFlip from "react-card-flip";
import Link from 'next/link';

export default function CareerCard({ job, onClick }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const flipCard = () => setIsFlipped(!isFlipped);



    const CardBody = ({ children }) => {
        return (
            <div className="
            xl:w-[390px] w-[187px] lg:w-[280px] xl:h-[500px] lg:h-[360px] h-[252px] relative border-[0.2px] border-gray-100 
            rounded-[16px] shadow-[0px_0px_14px_0px_#00000024] group cursor-pointer xl:my-10 my-3 bg-white"
                onClick={flipCard}>
                {children}
            </div>
        );
    };

    const CardFront = ({ image, jobTitle }) => {
        return (

            <CardBody>
                <div className={`flex justify-center items-center select-none`}>
                    <Image className="xl:h-[157px] xl:w-[200px] lg:h-[110px] lg:w-[140px]  w-[71px] h-[62px] object-contain xl:mt-[130px] mt-[70px] mb-3 xl:mb-5" src={image} alt={`${jobTitle}`} />
                </div>

                <div className="flex justify-center items-center text-zinc-950 xl:text-2xl lg:text-lg text-[12px] font-bold  xl:leading-[45px] select-none lg:w-[80%] xl:w-[80%] w-[60%] ml-10 text-center">
                    {jobTitle}
                </div>
            </CardBody>
        )
    }

    const CardBack = ({ image, jobTitle, jobDescription, jobApplication }) => {

        return (
            <CardBody>
                <div className="flex flex-col justify-center items-center xl:p-10 p-3 xl:mt-0 mt-3 ">


                    <Image alt={`${jobTitle}`} className="xl:h-[132px] xl:w-[152px] lg:h-[80px] lg:w-[100px] w-[55px] h-[45px] xl:mb-[10%]  mb-5 object-contain select-none" src={image} />

                    <div className="text-neutral-900 xl:text-[20px] lg:text-[18px] text-[12px] font-bold lg:font-semibold xl:font-semibold  xl:leading-[56px] lg:leading-[50px] select-none">
                        {jobTitle}
                    </div>

                    <div className="xl:w-[300px] lg:w-[220px] xl:h-[80px] xl:mb-0 my-4 text-justify text-neutral-900 xl:text-[14px] lg:text-[12px] text-[8px] font-normal  xl:leading-relaxed select-none lg:leading-snug xl:tracking-tighter lg:tracking-tighter">
                        {jobDescription}
                    </div>

                    <Link onClick={() => onClick()} href={jobApplication}
                        className="xl:w-[227px] xl:h-12 bg-white rounded-[7px] shadow border border-yellow-400 text-yellow-400 
                        xl:text-2xl text-[14px] font-bold lg:mt-[10%] xl:mt-[25%] xl:px-0 px-3 xl:py-0 py-1
                        flex justify-center items-center
                        select-none
                        hover:bg-yellow-400 hover:text-white
                    ">
                        Apply Now

                    </Link>
                </div>
            </CardBody>
        )
    }




    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">

            <CardFront image={job.image} jobTitle={job.title} />

            <CardBack image={job.image} jobTitle={job.title} jobDescription={job.description} jobApplication={job.jobApplication} />


        </ReactCardFlip>
    );
}
