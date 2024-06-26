import Image from 'next/image';

const RightImageComponent = ({ project }) => {
    return (
        <div className="flex  col-span-2 xl:mt-6 mt-10">

            {/* Description */}
            <div className={`${project?.id == 1 ? 'xl:mt-8 lg:mt-8' : ''} xl:h-[100%] h-[50%] w-[50%] flex flex-1 flex-col justify-center items-center xl:p-[5.8%] lg:p-[2%] lg:px-[4%] p-[3%] relative`}>
                <div className="text-black xl:text-[60px] lg:text-[42px] text-[16px] lg:font-semibold xl:font-semibold font-bold  xl:self-end lg:self-end self-start mb-5 relative z-30">
                    {project?.name}

                    {/* Border */}
                    <div className="absolute xl:w-[223px] lg:w-[190px] w-[60%] xl:h-2 h-[3px] bg-yellow-400 xl:bottom-[22px] bottom-[5px] lg:bottom-[18px] self-end  xl:-z-10 -z-10"></div>
                </div>

                <div className="xl:w-[100%] lg:w-[100%] xl:h-[220px] w-[100%] text-justify text-[#404040] xl:text-[18px] lg:text-[17px] text-[8px] font-normal  self-end ">
                    {project?.description}
                </div>
            </div>

            {/* Project Picture */}
            <div className={` ${project?.id == 1 ? 'xl:mt-10 lg:mt-10' : ''} xl:h-[100%]  h-[50%] w-[50%] flex justify-center items-center `}>
                <Image src={project?.image} alt={`${project?.name} Project`} height={390} width={634} className="object-contain lg:h-[300px] max-lg:w-[560px] xl:h-[390px] xl:w-[634px]" />
            </div>
        </div>
    );
};

export default RightImageComponent;
