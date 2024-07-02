import { submitContactUs } from "@/assets/apiCalls/contactUs";
import { appIcons, appImages } from "@/assets/utilities";
import Image from "next/image";
import { useState } from "react";

export default function ContactUs() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        bestTimeToContact: '',
        preferredContactMethod: '',
        additionalInformation: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {

        try {
            const jsonFormData = JSON.stringify(formData);
            console.log('Form submitted', jsonFormData);

            const response = await submitContactUs(formData);
            console.log('Response from API:', response);
            if (response.status == 200) {
                setIsModalOpen(true);
                setFormData({ name: '', email: '', confirmEmail: '', phoneNumber: '', bestTimeToContact: '', preferredContactMethod: '', additionalInformation: '' })
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };


    return (
        <div className="flex flex-col select-none lg:py-3 xl:py-3 lg:my-0 xl:my-0 py-3 bg-stone-50">
            <div className="flex-1">
                {/* Header */}
                <div className="lg:mt-10 xl:mt-10 mt-4 flex flex-row items-center w-[80%] self-center ml-[8%]">
                    <Image width={48} height={2} alt='icon' src={appImages.headingDash} className='object-contain lg:h-[16px] xl:h-[16px] lg:w-[48px] xl:w-[48px] h-[9px] w-[38px] ' />
                    <span className="lg:text-[28px] xl:text-[28px] text-obsGrey lg:ml-[22px] xl:ml-[22px] ml-[10px] font-semibold xl:font-normal lg:font-normal">
                        Contact Us
                    </span>
                </div>
                <div className="lg:h-[40px] xl:h-[70px] mb-[13px] xl:mt-5 lg:mt-5 w-[80%] self-center ml-[8%]">
                    <span className="text-black lg:text-[36px] xl:text-[48px] text-[13px] font-semibold lg:mt-12 xl:mt-12">
                        Reach out<span className='text-obsYellow xl:ml-4 lg:ml-4 ml-2'>to our headquarters </span>
                    </span>
                </div>

                <div className=" lg:block xl:block hidden mb-[5px] lg:mt-5 xl:mt-6 w-[75%] self-center text-black xl:text-[18px] lg:text-[16px] ml-[8%] font-light leading-[30px]">
                    {`Feel free to leave a message anytime, we’re always eager to hear from you! `}
                </div>
                {/* <div className="lg:mb-[0px] xl:mb-[0px] lg:w-[80%] xl:w-[80%] ml-[10%] self-center text-[#6D6D6D] lg:mt-10 xl:mt-10 mt-3 text-[10px] lg:text-black xl:text-black lg:text-[25px] xl:text-[22px] font-normal">
                    What can we do for you?
                </div> */}

                {/* Contact Form */}
                <div className="lg:flex xl:flex lg:flex-row xl:flex-row gap-4 lg:w-[80%] xl:w-[80%] lg:h-[609px] xl:h-[609px] bg-white rounded-xl shadow-[-6px_6px_5px_0px_#00000024] border-[0.5px] lg:ml-[8%] xl:ml-[10%] lg:mt-[60px] xl:mt-[60px] lg:p-10 xl:p-10 p-3 pt-6 lg:py-3 xl:py-3 lg:px-10 xl:px-10 px-5 w-[85%] ml-[8%] mt-10 h-auto flex flex-col">
                    {/* Left Column */}
                    <div className="lg:flex lg:flex-col xl:flex xl:flex-col lg:pt-5 xl:pt-5 lg:w-[50%] xl:w-[50%]">
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="lg:w-[100%] xl:w-[80%] lg:h-[45px] xl:h-[44px] rounded-[5px] lg:text-[16px] xl:text-[16px] text-[12px] px-2 py-4 h-[22px] w-[100%] border-[0.5px] border-[#949494] lg:border xl:border lg:px-4 xl:px-4 focus:outline-none focus:border-obsYellow mb-4 lg:mb-0 xl:mb-0 placeholder-[#595959]"
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                placeholder="Phone Number"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="lg:w-[100%] xl:w-[80%] lg:h-[45px] xl:h-[44px] rounded-[5px] px-2 py-4 h-[22px] w-[100%] lg:text-[16px] xl:text-[16px] text-[12px] border-[0.5px] border-[#949494] lg:border xl:border lg:my-[60px] xl:my-[60px] lg:px-4 xl:px-4 focus:outline-none focus:border-obsYellow placeholder-[#595959]"
                            />
                        </div>
                        <div className="lg:mt-0 xl:mt-0 mt-[15px] ">
                            <select
                                id="preferredContactMethod"
                                name="preferredContactMethod"
                                // defaultValue="What’s your preferred method of contact?"
                                value={formData.preferredContactMethod}
                                onChange={handleChange}
                                className="lg:w-[100%] xl:w-[80%] lg:h-[45px] xl:h-[44px] rounded-[5px] lg:text-[16px] xl:text-[16px] text-[12px] border-[0.5px] border-[#949494] lg:border xl:border lg:px-4 xl:px-4 lg:mb-[40px] xl:mb-[40px] lg:py-0 focus:outline-none focus:border-obsYellow px-2 h-[32px] w-[100%] placeholder-[#595959]"
                            >
                                <option disabled>What’s your preferred method of contact?</option>
                                <option value="Phone Call">Phone Call</option>
                                <option value="Email">Email</option>
                                <option value="Social Media">Social Media</option>
                            </select>
                        </div>

                        <button
                            onClick={() => { handleSubmit() }}
                            className="lg:w-[325px] xl:w-[325px] lg:h-[45px] xl:mt-10 lg:mt-10 xl:h-[45px] text-white bg-yellow-400 rounded-[7px] lg:block xl:block hidden">
                            Submit your message
                        </button>
                    </div>

                    {/* Right Column */}
                    <div className="lg:flex lg:flex-col xl:flex xl:flex-col lg:pt-5 xl:pt-5 lg:mt-0 xl:mt-0 mt-0 lg:w-[50%] xl:w-[50%]">
                        <div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                id="email"
                                name="email"
                                className="lg:w-[100%] xl:w-[100%] lg:h-[45px] xl:h-[44px] rounded-[5px] border-[0.5px] border-[#949494] lg:border xl:border lg:px-4 xl:px-4 lg:text-[16px] xl:text-[16px] text-[12px] focus:outline-none focus:border-obsYellow px-2 py-4 h-[22px] w-[100%] placeholder-[#595959]"
                            />
                        </div>
                        <div className="lg:mt-0 xl:mt-0 mt-[-45px]">
                            <input
                                type="text"
                                placeholder="Best time to contact you?"
                                id="bestTimeToContact"
                                name="bestTimeToContact"
                                value={formData.bestTimeToContact}
                                onChange={handleChange}
                                className="lg:w-[100%] xl:w-[100%] lg:h-[45px] xl:h-[44px] rounded-[5px] border-[0.5px] border-[#949494] lg:border xl:border my-[60px] lg:text-[16px] xl:text-[16px] text-[12px] focus:outline-none focus:border-obsYellow px-2 py-4 h-[22px] w-[100%] placeholder-[#595959]"
                            />
                        </div>

                        <div className="lg:my-0 xl:my-0 lg:mt-0 xl:mt-0 mt-[-50px]">
                            <textarea
                                placeholder="Do you have any additional information?"
                                id="additionalInformation"
                                name="additionalInformation"
                                value={formData.additionalInformation}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-[5px] lg:w-[100%] xl:w-[100%] w-[100%] lg:text-[16px] xl:text-[16px] text-[12px] px-4 border-[0.5px] border-[#949494] lg:border xl:border focus:outline-none focus:border-obsYellow placeholder-[#595959]"
                                rows={10} cols={27}
                            />
                        </div>
                        <button className="w-[165px] h-[23px] bg-yellow-400 text-white rounded-[3px] my-5 mx-auto text-[11px] lg:hidden xl:hidden block font-semibold ">
                            Submit your Message
                        </button>
                    </div>
                </div>
            </div>



            {isModalOpen && (
                <div
                    onClick={() => setIsModalOpen(false)}
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-lg z-50"
                >
                    <div className="bg-white rounded-xl p-8 lg:h-[300px] xl:h-[300px] lg:w-[600px] xl:w-[600px] h-[250px] w-[360px] flex flex-col justify-center items-center">

                        <Image src={appIcons.checkIcon} alt="checkIcon" height={20} width={20} className="object-contain h-[60px] w-[60px] mb-5" />

                        <div className="text-neutral-700 lg:text-[35px] xl:text-[35px] text-[20px] font-semibold">
                            Thankyou for Contacting Us !
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
