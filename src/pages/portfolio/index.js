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
