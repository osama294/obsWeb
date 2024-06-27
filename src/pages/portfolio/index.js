import { appImages } from "@/assets/utilities";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from 'next/image';

import ProjectsData from "../../components/portfolioData/data";
import RightImageComponent from "./components/rightImageComponent";
import LeftImageComponent from "./components/leftImageComponent";


export default function PortfolioPage() {

    return (
        <div className="lg:max-w-full xl:max-w-full  bg-white select-none">
            <Navbar />
            <div className="lg:h-[98px] xl:h-[70px] mb-[13px] xl:mt-14 lg:mt-14 w-[80%] self-center ml-[4%] mt-10">
                <span className="text-black lg:text-[36px] xl:text-[48px] text-[13px] font-semibold lg:mt-12 xl:mt-12">
                    Missions  <span className='text-obsYellow'>Accomplished</span>!
                </span>
            </div>

            {/* Top Text */}
            <div className="h-[50px] lg:block xl:block  mb-[13px] text-[9px] lg:mt-0 xl:mt-0 w-[80%] self-center text-black xl:text-[18px] lg:text-[16px] ml-[4%] font-light lg:leading-[30px] xl:leading-[30px]">
                Take a look at how our digital exploits have come to life. Our highly equipped heroes make apps that rescue users from boredom by creating solutions that vanquish business challenges. Our extensive portfolio showcases the legendary work of our team.
            </div>
            {ProjectsData.map((project, index) => {
                return (index % 2 === 0) ?
                    (
                        <RightImageComponent key={project.id} project={project} />
                    )
                    :
                    (
                        <LeftImageComponent key={project.id} project={project} />
                    );
            })}
            <Footer />
        </div>
    );
}
