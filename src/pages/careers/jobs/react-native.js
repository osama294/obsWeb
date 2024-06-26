import { appImages } from "@/assets/utilities";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from 'next/image'
import ApplicationForm from "../applicationForm/application";
import Link from 'next/link';


export default function ReactNativeJob() {
    return (
        <div className="md:max-w-full bg-white">

            <Navbar />

            <div className="md:h-[40px] h-[50px] md:w-[450px] w-[300px] md:my-[80px] my-[50px] flex justify-center items-center mx-auto">
                <Image src={appImages.reactNativeJobHeading} alt="JobHeading" height={'100%'} width={'100%'} className=" object-contain flex flex-1" />
            </div>

            <div className="md:h-[650px] h-[350px] w-[350px] md:w-[750px] md:my-[150px] flex justify-center items-center mx-auto">


                <Image src={appImages.reactNativeJobDes} alt="reactNativeJob" className=" object-contain flex flex-1" height={'100%'} width={'100%'} />

            </div>



            <div className="md:h-[200px] h-[20px] w-[125px] md:w-[800px] md:my-[20px] my-[50px] flex justify-center items-center mx-auto">

                <Link href={'../applicationForm/application'}
                    className="
                md:w-[550px] w-[130px] h-[30px]  md:h-[55px] bg-black md:rounded-[40px] rounded-[20px] my-[5%] flex justify-center items-center  

                                    before:ease transition-all before:absolute before:right-0 before:top-0 before:h-full before:w-16 before:translate-x-16 before:rotate-6 before:bg-white before:opacity-15 before:duration-700 hover:before:-translate-x-[800px] hover:text-white overflow-hidden relative 
                "
                    onClick={() => console.log('Form submitted')}>
                    <p className="text-center text-white md:text-[22px] text-[10px] font-medium ">
                        Apply for this job
                    </p>
                </Link>

            </div>


            <Footer />
        </div>
    );
}