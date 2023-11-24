import { Link } from "react-router-dom";
import banner from "../assets/sectionBanner/one.jpeg"
const SectionBanner = () => {
    return (
        <Link to="" className="relative" title="Black SunDay">
            <img src={banner} alt="" className="w-11/12 mx-auto md:h-72 object-cover" />
            <div className="absolute md:top-1/4 top-2 md:left-32 left-20 z-10 space-y-1 bg-slate-200/20 md:bg-slate-200/10 md:p-3 rounded-lg px-1 ">
                <h2 className="md:text-6xl text-2xl md:font-semibold font-bold uppercase md:text-white text-slate-950">Black Sunday </h2>
                <p className="md:text-3xl text-lg md:font-semibold font-bold md:text-white text-slate-900 uppercase text-center">Shopping Save</p>
                <div className="bg-orange-800 rounded-md text-center py-1 md:w-2/5 w-1/2 mx-auto">
                    <button className="md:text-lg text-sm tracking-wide font-semibold uppercase text-white">Shop Now</button>
                </div>
            </div>
        </Link>
    );
};

export default SectionBanner;