import { submitApplicationForm } from "@/assets/apiCalls/applicationFrom";
import { appIcons, appImages } from "@/assets/utilities";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

import { useRef, useState } from "react";

export default function ApplicationForm() {


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        appliedPosition: '',
        earliestPossibleStartDate: '',
        preferredInterveiwDate: '',
        timeForInterview: '',
        coverLetter: '',
        resume: '',
        otherDocs: '',
    });

    const fileInputRef = useRef(null);
    const AdditionalDataRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [uploadAdditionalFiles, setUploadAdditionalFiles] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [isUploadingAdditionalFiles, setIsUploadingAdditionalFiles] = useState(false);
    const [invalidFile, setInvalidFile] = useState(false);
    const [additionalInvalidFiles, setAdditionalInvalidFiles] = useState(false);
    const [isDragActive, setIsDragActive] = useState(false);
    const [isAdditionalDocDrag, setIsAdditionalDocDrag] = useState(false);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const dayName = days[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const suffix = (day) => {
            if (day > 3 && day < 21) return 'th'; // exceptions for 11th to 20th
            switch (day % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        };

        return `${dayName} ${day}${suffix(day)}, ${month}`;
    };



    const [formattedDate, setFormattedDate] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (name === 'preferredInterveiwDate') {
            setFormattedDate(formatDate(value));
        }
    }

    const handleUpload = (files) => {
        try {
            setIsUploading(true);

            // Check if the uploaded file is a PDF
            const isPdf = files.every((file) => file.type === "application/pdf");

            if (!isPdf) {
                setInvalidFile(true);
                setTimeout(() => {
                    setInvalidFile(false);
                }, 1000);

                throw new Error("Please upload only PDF files.");
            }

            setUploadedFiles(uploadedFiles.concat(files));

            const firstPdf = files[0];
            setFormData({
                ...formData,
                resume: firstPdf,
            });
        } catch (error) {
            console.log(error);
        } finally {
            setIsUploading(false);
        }
    };


    const handleAdditionalFiles = (files) => {
        try {
            setIsUploadingAdditionalFiles(true);
            const isPdf = files.every((file) => file.type === "application/pdf");

            if (!isPdf) {
                setAdditionalInvalidFiles(true);

                setTimeout(() => {
                    setAdditionalInvalidFiles(false);
                }, 1000);

                throw new Error('Please upload only PDF files.');

            }
            setUploadAdditionalFiles(uploadAdditionalFiles.concat(files));

            const firstPdf = files[0];

            setFormData({
                ...formData,
                otherDocs: firstPdf,
            })

        } catch (error) {
            console.log(error);
        } finally {
            setIsUploadingAdditionalFiles(false);
        }
    }


    const handleSubmit = async (e) => {

        const allFieldsFilled = Object.entries(formData).every(([key, field]) => {
            if (typeof field === 'string') {
                return field.trim() !== '';
            }
            return field !== '';
        });
        console.log(formData)
        if (!allFieldsFilled) {
            alert('Please fill all the fields before submitting.');
            return;
        }
        else {
            setIsModalOpen(true);
            setFormData({
                firstName: '', lastName: '', email: '', phoneNumber: '', appliedPosition: '', earliestPossibleStartDate: '',
                preferredInterveiwDate: '', timeForInterview: '', coverLetter: '', resume: '', otherDocs: '',
            });
            setUploadedFiles([]);
            setUploadAdditionalFiles([]);
        }

        // try {
        //     const formDataToSend = new FormData();

        //     // Append form fields
        //     formDataToSend.append("firstName", formData.firstName);
        //     formDataToSend.append("lastName", formData.lastName);
        //     formDataToSend.append("email", formData.email);
        //     formDataToSend.append("phoneNumber", formData.phoneNumber);
        //     formDataToSend.append("appliedPosition", formData.appliedPosition);
        //     formDataToSend.append("earliestPossibleStartDate", formData.earliestPossibleStartDate);
        //     formDataToSend.append("preferredInterveiwDate", formData.preferredInterveiwDate);
        //     formDataToSend.append("timeForInterview", formData.timeForInterview);
        //     formDataToSend.append("coverLetter", formData.coverLetter);

        //     // Append files
        //     uploadedFiles.forEach((file, index) => {
        //         formDataToSend.append(`resume`, file);
        //     });

        //     uploadAdditionalFiles.forEach((file, index) => {
        //         formDataToSend.append(`otherDocs`, file);
        //     });

        //     const response = await submitApplicationForm(formDataToSend);
        //     console.log('Response from API:', response);

        //     if (response.status === 200) {
        //         setIsModalOpen(true);
        //         setFormData({
        //             firstName: '', lastName: '', email: '', phoneNumber: '', appliedPosition: '', earliestPossibleStartDate: '',
        //             preferredInterveiwDate: '', timeForInterview: '', coverLetter: '', resume: '', otherDocs: '',
        //         });
        //     } else {
        //         console.error("Error submitting form:", response);
        //     }
        // } catch (error) {
        //     console.error("Error submitting form:", error);
        // }
    };

    //use these functions on drag events 



    const handleDragEnter = () => {
        setIsDragActive(true);
    };

    const handleAdditionalDragEnter = () => {
        setIsAdditionalDocDrag(true);
    };

    const handleDragLeave = () => {
        setIsDragActive(false);
    };

    const handleAdditionalDragLeave = () => {
        setIsAdditionalDocDrag(false);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragActive(false);
        const files = Array.from(e.dataTransfer.files);
        handleUpload(files);
    };

    const handleAdditionalDrop = (e) => {
        e.preventDefault();
        setIsAdditionalDocDrag(false);
        const files = Array.from(e.dataTransfer.files);
        handleAdditionalFiles(files);
    }

    const handleFileInput = (e) => {
        const files = Array.from(e.target.files);
        handleUpload(files);
    };

    const handleAdditionalInputFiles = (e) => {
        const files = Array.from(e.target.files);
        handleAdditionalFiles(files);
    }

    return (

        <>

            <div className="md:max-w-full md:h-screen bg-white">
                <Navbar />

                <div className="flex-1 mt-[5%]">
                    {/* Header */}
                    <div className="h-1/6 flex flex-row items-center w-[80%] self-center ml-[8%]">
                        <Image width={48} height={2} alt='icon' src={appImages.headingDash} className='object-contain lg:h-[12px] xl:h-[12px] lg:w-[48px] xl:w-[48px] h-[9px] w-[38px] ' />
                        <span className="md:text-[25px] text-[14px] text-obsGrey md:ml-[22px] ml-[15px] font-medium ">
                            Application Form
                        </span>
                    </div>

                    {/* Subheader */}
                    <div className="md:h-[98px] md:mb-[13px] mt-[2%] md:mt-[1%] xl:mt-[1%]  md:w-[75%] w-[80%] self-center ml-[8%]">
                        <span className="text-black md:text-[25px] text-[10px] font-normal md:leading-10 leading-none">
                            We collaborate with platforms and companies to transform innovative concepts into stunning digital goods and experiences
                        </span>
                    </div>




                    <div className="w-[80%] ml-[8%] mt-[5%] xl:mt-[1%] lg:mt-[1%]">

                        {/* NAME */}

                        <label htmlFor="firstName">
                            <span className="text-black md:text-[15px] text-[10px] font-medium">Name</span>
                        </label>
                        <div className="flex gap-6 ">

                            {/* First Name */}
                            <div className="w-full md:w-[40%] mb-2 md:mr-2">

                                <input

                                    className="w-full md:h-[45px] lg:px-1 xl:px-1 rounded-none border-b border-black md:text-[15px] text-[9px] md:mb-[3px] px-1 py-1 mb-1 focus:outline-none focus:border-obsYellow"
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                <span className="text-[#535353] md:text-[12px] text-[8px] font-normal">First Name</span>
                            </div>

                            {/* Last Name */}

                            <div className="w-full md:w-[40%]  ">
                                <input
                                    className="md:w-full w-[93%] md:h-[45px] lg:px-1 xl:px-1 rounded-none  border-b border-black md:text-[15px] text-[9px]   mb-1 px-1 py-1 focus:outline-none focus:border-obsYellow"
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                                <span className="text-[#535353] md:text-[12px] text-[8px] font-normal">Last Name</span>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="mb-4 flex flex-col md:flex-row mt-[2%]">

                            {/* EMAIL */}
                            <div className="w-full md:w-[40%] mb-2 md:mr-2">
                                <label htmlFor="email">
                                    <span className="text-black md:text-[15px] text-[10px] font-medium">E-mail</span>
                                </label>
                                <input
                                    placeholder="ex: myname@gmail.com"
                                    className="w-full md:h-[45px] border-b border-black md:my-[15px] rounded-none my-5 md:text-[15px] text-[9px] lg:px-1 xl:px-1  px-1 pb-2 focus:outline-none focus:border-obsYellow"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Phone Number */}

                            <div className="w-full md:w-[40%] mb-2 md:ml-[2%]">

                                <label htmlFor="phoneNumber">
                                    <span className="text-black md:text-[15px] text-[10px] font-medium">Phone Number</span>
                                </label>
                                <input
                                    placeholder="(000) 000-00000"

                                    className="w-full md:h-[45px] border-b rounded-none border-black md:my-[15px] my-5 md:text-[15px] lg:px-1 xl:px-1  text-[9px] px-1 pb-2 focus:outline-none focus:border-obsYellow"
                                    type="number"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>


                        {/* Row 3 */}

                        <div className="mb-4 flex flex-col md:flex-row mt-[2%]">

                            {/* Applied Position */}
                            <div className="w-full md:w-[40%] mb-2 md:mr-2">
                                <label htmlFor="appliedPosition">
                                    <span className="text-black md:text-[15px] text-[10px] font-medium">Applied Position</span>
                                </label>
                                <input
                                    className="w-full md:h-[45px] border-b rounded-none lg:px-1 xl:px-1  border-black md:my-[15px] md:text-[15px] my-5 text-[9px] px-1 pb-2 mb-2 focus:outline-none focus:border-obsYellow"
                                    type="text"
                                    id="appliedPosition"
                                    name="appliedPosition"
                                    value={formData.appliedPosition}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Earliest Possible Start Date*/}

                            <div className="w-full md:w-[40%] mb-2 md:ml-[2%]">
                                <label htmlFor="earliestPossibleStartDate">
                                    <span className="text-black md:text-[15px] text-[10px] font-medium">Earliest Possible Start Date</span>
                                </label>
                                <input
                                    placeholder="MM-DD-YYYY"

                                    className="w-full md:h-[45px] border-b rounded-none lg:px-1 xl:px-1  border-black mt-5 md:my-[15px] md:text-[15px] text-[9px] px-1 pb-2 focus:outline-none focus:border-obsYellow"
                                    type="text"
                                    id="earliestPossibleStartDate"
                                    name="earliestPossibleStartDate"
                                    value={formData.earliestPossibleStartDate}
                                    onChange={handleChange}
                                />

                                <span className="text-[#535353] md:text-[15px] text-[9px] font-normal md:hidden">Date</span>
                            </div>
                        </div>




                        {/* Row 4 */}
                        <div className="mb-4 flex flex-row mt-[2%] justify-between">

                            {/* Preferred Interview Date */}
                            <div className="w-full md:w-[40%] mb-2 md:mr-2 flex flex-col">
                                <label htmlFor="preferredInterveiwDate">
                                    <span className="text-black md:text-[15px] text-[10px] font-medium">Preferred Interview Date</span>
                                </label>
                                <input
                                    className="w-full md:h-[45px] border-b rounded-none border-black my-[15px] lg:px-1 xl:px-1  md:text-[15px] text-[9px] px-4 mb-2 focus:outline-none focus:border-obsYellow"
                                    type="date"
                                    id="preferredInterveiwDate"
                                    name="preferredInterveiwDate"
                                    value={formData.preferredInterveiwDate}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Preferred Interview Time */}
                            <div className="w-full md:w-[40%] mb-2 md:ml-[2%] flex flex-col ml-7">
                                <label htmlFor="timeForInterview" className="mb-2 md:mb-5">
                                    <span className="text-black md:text-[15px] text-[10px] font-medium">{(formData.preferredInterveiwDate) ? formattedDate : 'Select Time'}</span>
                                </label>
                                <input
                                    placeholder="00:00"
                                    className="w-[70%] md:w-[181px] md:h-[58px] rounded-none md:text-[15px] text-[9px] mt-1 md:rounded-lg  border border-obsYellow px-5 focus:outline-none focus:border-obsYellow"
                                    type="time"
                                    id="timeForInterview"
                                    name="timeForInterview"
                                    value={formData.timeForInterview}
                                    onChange={handleChange}
                                />

                            </div>
                        </div>



                        {/* coverLetter */}
                        <div className="mb-4 mt-[5%]">

                            <label htmlFor="coverLetter">
                                <span className="text-black md:text-[15px] text-[10px] font-medium ml-1">Cover Letter</span>
                            </label>
                            <textarea
                                value={formData.coverLetter}
                                onChange={handleChange}
                                id="coverLetter"
                                name="coverLetter"
                                className="w-full px-3 py-2  rounded-[10px] md:h-[300px] h-[100px]  md:text-[15px] text-[11px]  md:border-black border-[#7E7E7E] border focus:outline-none focus:border-obsYellow xl:mt-[5px] lg:mt-[5px]   mt-[5px] resize-none"
                                rows={14} cols={5}
                            />
                            <span className="text-[#535353]  md:text-[15px] text-[9px] font-normal">Please do not exceed more than 200 words.</span>
                        </div>


                        {/* resume */}
                        <div className="mb-4 mt-[5%] hidden lg:block xl:block ">

                            <label htmlFor="resume">
                                <span className="text-black text-[15px] font-medium  ml-1">Upload resume</span>
                            </label>

                            <div
                                className={`flex justify-center items-center w-full h-[19rem] border-2 border-dashed rounded-lg p-5 ${isDragActive ? "bg-sky-50 border-sky-400" : invalidFile ? "border-red-500" : "border-black mt-5 xl:mt-[5px] lg:mt-[5px]  "
                                    }`}
                                onDragEnter={handleDragEnter}
                                onDragLeave={handleDragLeave}
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={handleDrop}
                                id="resume"
                                onClick={() => fileInputRef.current.click()}
                            >
                                <p
                                    className={`text-sm ${isDragActive ? "text-sky-800" : invalidFile ? "text-red-500" : "text-gray-400"
                                        }  `}
                                >
                                    {isDragActive
                                        ? "Leave Your File Here"
                                        : uploadedFiles.length > 0
                                            ? `File Uploaded: ${uploadedFiles[0].name}`
                                            : invalidFile
                                                ? "Please upload .pdf format files"
                                                : "Drag and drop your files here"}
                                </p>
                            </div>

                            {/* File input for click-to-upload */}
                            <input
                                type="file"
                                accept=".pdf"
                                onChange={handleFileInput}
                                style={{ display: 'none' }}
                                ref={fileInputRef}
                            />
                        </div>


                        {/* Additional Documents */}

                        <div className="mb-4 mt-[5%] hidden lg:block xl:block">

                            <label htmlFor="resume">
                                <span className="text-black text-[15px] font-medium  ml-1">Any other Documents to Upload</span>
                            </label>

                            <div
                                className={`flex justify-center items-center w-full xl:mt-[5px] lg:mt-[5px]   h-[19rem] border-2 border-dashed rounded-lg p-5 ${isAdditionalDocDrag ? "bg-sky-50 border-sky-400" : additionalInvalidFiles ? "border-red-500" : "border-black mt-5"
                                    }`}
                                onDragEnter={handleAdditionalDragEnter}
                                onDragLeave={handleAdditionalDragLeave}
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={handleAdditionalDrop}
                                id="resume"
                                onClick={() => AdditionalDataRef.current.click()}
                            >
                                <p
                                    className={`text-sm ${isAdditionalDocDrag ? "text-sky-800" : additionalInvalidFiles ? "text-red-500" : "text-gray-400"
                                        }  `}
                                >
                                    {isAdditionalDocDrag
                                        ? "Leave Your File Here"
                                        : uploadAdditionalFiles.length > 0
                                            ? `File Uploaded: ${uploadAdditionalFiles[0].name}`
                                            : additionalInvalidFiles
                                                ? "Please upload .pdf format files"
                                                : "Drag and drop your files here"}
                                </p>
                            </div>

                            {/* File input for click-to-upload */}
                            <input
                                type="file"
                                accept=".pdf"
                                onChange={handleAdditionalInputFiles}
                                style={{ display: 'none' }}
                                ref={AdditionalDataRef}
                            />
                        </div>

                        <div className="lg:hidden xl:hidden flex w-[100%] flex-row items-center justify-between mt-10">

                            <div className="flex flex-col items-start gap-2">
                                <span className="text-[7px] font-medium text-[black] ">Upload Resume</span>
                                <button
                                    onClick={() => fileInputRef.current.click()}
                                    className="bg-[#0047FF] rounded-[50px] text-[9px] text-[white] flex font-medium items-center gap-1 justify-evenly px-3 py-1">
                                    <Image src={appIcons.uploadDocIcon} alt="uploadIcon" height={10} width={10} className="object-contain h-3 w-3" />
                                    <span>
                                        Upload File
                                    </span>

                                </button>

                            </div>

                            <div className="flex flex-col items-start gap-2 ">
                                <span className="text-[7px] font-medium text-[black] ">Any other Documents to Upload</span>
                                <button
                                    onClick={() => AdditionalDataRef.current.click()}
                                    className="bg-[#0047FF] rounded-[50px] text-[9px] text-[white] flex font-medium items-center gap-1 justify-evenly px-3 py-1">
                                    <Image src={appIcons.uploadDocIcon} alt="uploadIcon" height={10} width={10} className="object-contain h-3 w-3" />
                                    <span>
                                        Upload File
                                    </span>

                                </button>
                            </div>
                        </div>

                        <div className="xl:hidden lg:hidden flex items-end justify-end mt-1">
                            <span className="text-[6px] font-normal text-[#535353] self-end">
                                You can share certificates, diplomas etc.
                            </span>
                        </div>





                        <button
                            onClick={() => {
                                // setIsModalOpen(true)
                                // console.log("form Data = ", formData)
                                handleSubmit()
                            }}
                            className="md:h-12 flex w-full justify-center items-center my-[10%]">
                            <div className="md:w-[227px] md:h-[100%]  md:text-2xl w-[120px] h-[40px] font-semibold text-yellow-400  bg-white rounded-[7px] shadow border border-yellow-400  md:leading-[45px] leading-[40px] hover:bg-yellow-400  hover:text-white">
                                Apply Now
                            </div>
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

                            <div className=" lg:text-[38px] xl:text-[38px] text-[27px] font-medium text-obsYellow">
                                Congratulations!
                            </div>

                            <div className="text-neutral-700 lg:text-xl xl:text-xl text-[12px] lg:m2-0 xl:m2-0 mt-2 font-normal">
                                Your Application for this job has been submitted.
                            </div>

                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="lg:w-[138px] xl:w-[138px] lg:h-[52px] xl:h-[52px] lg:px-0 xl:px-0 px-10 lg:py-0 xl:py-0 py-1 bg-yellow-400 rounded-xl mt-8"
                            >
                                <span className="text-neutral-700 lg:text-2xl xl:text-2xl text-[20px] font-medium">
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
