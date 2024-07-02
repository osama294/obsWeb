import { submitHireUs } from "@/assets/apiCalls/hireUs";
import { appIcons } from "@/assets/utilities";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";

export default function HireUs() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', confirmEmail: '', timelineForProject: '', WebsiteUrl: '', companyName: '', platform: '', budget: '', projectDescription: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // const handleSubmit = (e) => {

    //     const jsonFormData = JSON.stringify(formData);
    //     console.log('Form submitted', jsonFormData);
    //     setIsModalOpen(true);
    // };

    const handleSubmit = async (e) => {

        try {
            const { name, email, confirmEmail, timelineForProject, platform, budget, projectDescription } = formData;
            if (!name || !email || !confirmEmail || !timelineForProject || !platform || !budget || !projectDescription) {
                alert('Please fill out all required fields.');
                return;
            }
            if (email !== confirmEmail) {
                alert('Email and Confirm Email do not match.');
                return;
            }
            const jsonFormData = JSON.stringify(formData);
            console.log('Form submitted', jsonFormData);
            const response = await submitHireUs(formData);
            console.log('Response from API:', response);
            if (response.status == 200) {
                setIsModalOpen(true);
                setFormData({ name: '', email: '', confirmEmail: '', timelineForProject: '', WebsiteUrl: '', companyName: '', platform: '', budget: '', projectDescription: '' });
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (

        <>

            <div className="md:max-w-full  bg-white">
                <Navbar />

                <div className="flex-1 mt-[5%]">
                    {/* Header */}
                    <div className="flex flex-row items-center w-[80%] self-center ml-[8%] ">
                        <div className="bg-[url('../assets/images/headingDash.png')] h-[1px] md:w-[48px] w-[25px]"></div>
                        <span className="md:text-[24px] text-[14px] text-obsGrey md:ml-[22px] ml-[15px] font-medium ">
                            Got a project for us?
                        </span>
                    </div>

                    {/* Subheader */}
                    <div className="md:h-[98px] md:mb-0 md:mt-[20px] mt-[2%]  md:w-[75%] w-[80%] self-center ml-[8%] ">
                        <span className="text-black md:text-[24px] text-[10px] font-normal md:leading-8 leading-none">
                            We collaborate with platforms and companies to transform innovative concepts into stunning digital goods and experiences.
                        </span>
                    </div>




                    <div className=" w-[80%] ml-[8%] md:mt-[7px] mt-[5%] ">

                        <div className="mb-4 mt-[5%] md:mt-8">
                            <label htmlFor="name" className="flex items-center">
                                <span className="text-red-600 text-[8px] md:text-[15px] mr-1 md:mr-4 font-medium  md:block ">*</span>
                                <span className="text-black md:text-[15px] text-[9px] font-medium ml-1">Your Name</span>
                            </label>
                            <input
                                className="w-full  px-3 py-2 md:my-3  md:text-[15px] text-[12px] border-b border-black focus:outline-none focus:border-obsYellow rounded-none"
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* EMAIL */}
                        <div className="mb-4 flex mt-[5%] md:mt-[1%]">
                            <div className="w-[40%] mr-2">
                                <label htmlFor="email" className="flex items-center">
                                    <span className="text-red-600 text-[8px] md:text-[15px] mr-1 md:mr-4 font-medium  md:block ">*</span>
                                    <span className="text-black md:text-[15px] text-[9px] font-medium"> Your Email</span>
                                </label>
                                <input
                                    className="w-full  md:my-3 px-3 py-2  md:text-[15px] text-[12px] border-b border-black focus:outline-none focus:border-obsYellow rounded-none"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* CONFIRM EMAIL */}

                            <div className="w-[40%] ml-[10%] ">
                                <label htmlFor="confirmEmail" className="flex items-center">
                                    <span className="text-red-600 text-[8px] md:text-[15px] mr-1 md:mr-4 font-medium  md:block ">*</span>
                                    <span className="text-black md:text-[15px] text-[9px] font-medium"> Confirm Email</span>
                                </label>
                                <input
                                    className="w-full  md:my-3 px-3 py-2 rounded-none md:text-[15px] text-[12px] border-b border-black focus:outline-none focus:border-obsYellow"
                                    type="email"
                                    id="confirmEmail"
                                    name="confirmEmail"
                                    value={formData.confirmEmail}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Project timelineForProject */}
                        <div className="mb-4 mt-[5% md:mt-[1%]">
                            <label htmlFor="timelineForProject" className="flex items-center">
                                <span className="text-red-600 text-[8px] md:text-[15px] mr-1 md:mr-4 font-medium  md:block ">*</span>
                                <span className="text-black md:text-[15px] text-[9px] font-medium ml-1">What is your timeline for the project?</span>
                            </label>
                            <input
                                className="w-full  md:my-3 px-3 py-2 rounded-none  md:text-[15px] text-[12px] border-b border-black focus:outline-none focus:border-obsYellow"
                                type="text"
                                id="timelineForProject"
                                name="timelineForProject"
                                value={formData.timelineForProject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Website URL */}
                        <div className="mb-4 mt-[5%] md:mt-[1%]">
                            <label htmlFor="WebsiteUrl">
                                <span className="text-black md:text-[15px] text-[9px] font-medium">Your Website URL</span>
                            </label>
                            <input
                                className="w-full  md:my-3 px-3 py-2 rounded-none  md:text-[15px] text-[12px] border-b border-black focus:outline-none focus:border-obsYellow"
                                type="text"
                                id="WebsiteUrl"
                                name="WebsiteUrl"
                                value={formData.WebsiteUrl}
                                onChange={handleChange}
                            />
                        </div>


                        {/* Company Name */}
                        <div className="mb-4 mt-[5%] md:mt-[1%]">
                            <label htmlFor="companyName">
                                <span className="text-black md:text-[15px] text-[9px] font-medium">Your Company Name</span>
                            </label>
                            <input
                                className="w-full  md:my-3 px-3 py-2 rounded-none md:text-[15px] text-[12px] border-b border-black focus:outline-none focus:border-obsYellow"
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}

                            />
                        </div>

                        {/* Platform */}
                        <div className="mb-4 mt-[5%] md:mt-[4%]">
                            <label htmlFor="platform" className="flex items-center">
                                <span className="text-red-600 text-[15px] mr-4 font-medium md:block hidden">*</span>
                                <span className="text-black md:text-[15px] text-[9px] font-medium ml-1">Choose your Platform?</span>
                            </label>
                            <select
                                className="w-full px-3 py-2  border-b rounded-none border-black md:text-[15px] text-[9px] focus:outline-none focus:border-obsYellow mt-[25px]"
                                id="platform"
                                name="platform"
                                value={formData.platform}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select Platform</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Web">Web</option>
                                <option value="Shopify">Shopify</option>
                            </select>
                        </div>

                        {/* Budget */}

                        <div className="mb-4 mt-[5%] md:mt-[4%]">
                            <label htmlFor="budget" className="flex items-center">
                                <span className="text-red-600 text-[15px] mr-4 font-medium  md:flex hidden">*</span>
                                <span className="text-black md:text-[15px] text-[9px] font-medium  ml-1">Tell us about your Budget?</span>
                            </label>
                            <select
                                className="w-full md:px-3 md:py-2 rounded-none  border-b md:text-[15px] text-[9px] border-black focus:outline-none focus:border-obsYellow mt-[25px]"
                                id="budget"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select budget</option>
                                <option value="100$-1000$">100$ - 1000$</option>
                                <option value="1000$-2000$">1000$ - 2000$</option>
                                <option value="2000$-3000$">2000$ - 3000$</option>
                                <option value="3000$-4000$">3000$ - 4000$</option>
                                <option value="4000$-5000$">4000$ - 5000$</option>
                                <option value="5000$-6000$">5000$ - 6000$</option>
                                <option value="6000$-7000$">6000$ - 7000$</option>
                                <option value="7000$-8000$">7000$ - 8000$</option>
                                <option value="8000$-9000$">8000$ - 9000$</option>
                                <option value="9000$-10,000$">9000$ - 10,000$</option>

                            </select>
                        </div>

                        {/* Project Details */}
                        <div className="mb-4 mt-[5%] md:mt-[4%]">

                            <label htmlFor="projectDescription" className="flex items-center">
                                <span className="text-red-600 text-[8px] md:text-[15px] mr-1 md:mr-4 font-medium  md:block ">*</span>
                                <span className="text-black md:text-[15px] text-[9px] font-medium ml-1">Tell us about your Project?</span>
                            </label>
                            <textarea
                                value={formData.projectDescription}
                                onChange={handleChange}
                                id="projectDescription"
                                name="projectDescription"
                                className="w-full px-3 py-2 bg-zinc-100 bg-opacity-50 md:text-[15px] text-[9px] rounded-[10px] border-2 border-black border-dashed focus:outline-none focus:border-obsYellow mt-[25px] h-[100px] md:h-[200px]"
                                rows={12} cols={5}
                            />

                        </div>



                        <button className="lg:w-[35vw] xl:w-[35vw] w-[145px] lg:h-[60px] xl:h-[60px] h-[25px] bg-black lg:rounded-[40px] xl:rounded-[40px] rounded-[20px] lg:ml-[30%] xl:ml-[35%] ml-[30%] lg:mr-auto xl:mr-auto my-[5%] lg:my-[3%] xl:my-[3%] 
                            before:ease transition-all before:absolute before:right-0 before:top-0 before:h-full before:w-16 before:translate-x-16 before:rotate-6 before:bg-white before:opacity-15 before:duration-700 hover:before:-translate-x-[800px] hover:text-white overflow-hidden relative"
                            onClick={() => {
                                // console.log('Form submitted', formData)
                                // setIsModalOpen(true);
                                handleSubmit();
                            }}>
                            <p className="text-center text-white lg:text-[25px] xl:text-[25px] text-[11px] font-medium">
                                Start working with us!
                            </p>
                        </button>

                    </div>

                </div>

                <Footer />



                {isModalOpen && (
                    <div
                        onClick={() => setIsModalOpen(false)}
                        className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-lg z-50"
                    >
                        <div className="bg-white rounded-xl p-8 lg:h-[300px] xl:h-[300px] lg:w-[600px] xl:w-[600px] h-[250px] w-[360px] flex flex-col justify-center items-center">

                            <Image src={appIcons.checkIcon} alt="checkIcon" height={20} width={20} className="object-contain h-[60px] w-[60px] mb-5" />

                            <div className="text-neutral-700 lg:text-[35px] xl:text-[35px] text-[20px] font-semibold">
                                Let’s get started
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
        </>

    );

}