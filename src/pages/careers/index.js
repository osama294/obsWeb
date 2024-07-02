
import CareersAtOBS from "@/components/careersAtOBS";
import Footer from "@/components/footer";
import Main from "@/components/main";
import Navbar from "@/components/navbar";

export default function Careers() {
    return (

        <div className="md:max-w-full md:h-screen bg-stone-50">

            <Navbar />

            <CareersAtOBS />


            <Footer />
        </div>

    );
}