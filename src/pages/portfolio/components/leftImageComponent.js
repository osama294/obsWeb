import Image from 'next/image';


const LeftImageComponent = ({ project }) => {
    return (
        <div className="flex  col-span-2 xl:my-10 my-20 ">
            {/* Project Picture */}
            <div className="xl:h-[100%] h-[50%] w-[50%] flex justify-center items-center">
                {project?.id === 12 ? (
                    <Image src={project?.image} alt={`${project?.name} Project`} height={571} width={400} className="object-contain xl:h-[571px] xl:w-[400px] h-[167px] w-[92px] lg:h-[300px] lg:w-[380px]" />
                ) : (
                    <Image src={project?.image} alt={`${project?.name} Project`} height={500} width={634} className="object-contain lg:h-[420px] lg:w-[500px] xl:h-[490px] xl:w-[634px]" />
                )}
            </div>

            {/* Description */}
            <div className="xl:h-[100%] h-[50%] w-[50%] flex flex-1 flex-col justify-center xl:p-[5.3%] p-[3%] lg:p-[2%] lg:px-[4%]">
                <div className="text-black xl:text-[60px] text-[16px] lg:text-[42px] lg:font-semibold xl:font-semibold font-bold  self-start mb-5 relative z-30">
                    {project?.name}
                    <div className="absolute xl:w-[223px] w-[60%] xl:h-2 h-[3px] bg-yellow-400 xl:bottom-[21px] bottom-[5px] lg:bottom-[18px]  self-end  xl:-z-10 -z-10"></div>
                </div>

                <div className="xl:w-[100%px] xl:h-[220px] lg:text-[17px]  lg:w-[100%]  w-[100%] text-justify text-[#404040] xl:text-[19px] text-[8px] font-normal  self-start">

                    {project?.description}
                </div>
            </div>
        </div>
    );
};

export default LeftImageComponent;
