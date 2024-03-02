import { useState } from "react";
import SortBy from "../Birthday/SortBy";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAllFlowers from "../../api/useAllFlowers";
import DataLoading from "../../Share/Loading/DataLoading";
import bannerImage from "../../assets/othersImg/flowerBanner.webp";
import { IoFlowerOutline, IoFlowerSharp } from "react-icons/io5";
import NoFoundData from "../../components/NoFoundData";


const SaleFlower = () => {
    const [cartAdd, setCartAdd] = useState(false);
    const [flowerAll, , isLoading] = useAllFlowers();
    const giftsMoreTotal = flowerAll.filter(giftsMores => giftsMores.flowerCategory === "giftsMore");
    const totalNumber = giftsMoreTotal.length;
    if (isLoading) {
        return <DataLoading />
    }
    return (
        <>
            <div className="mx-4 md:pb-6">
                <Helmet>
                    <title> Gifts Flower || Flower Shop </title>
                </Helmet>
            </div>
            <div className="mx-0 md:pb-12 pb-4 border-0 border-b border-slate-400">
                <img src={bannerImage} loading='lazy' alt="banner" className="w-full h-[280px] object-cover" />
            </div>

            <div className="grid md:grid-cols-4">
                <div className="md:col-span-1 md:block hidden">

                </div>
                <div className="md:col-span-3 pr-2">
                    <SortBy length={totalNumber}
                        category={giftsMoreTotal}
                        ascending={giftsMoreTotal}
                    />
                </div>
            </div>
            <div className="md:mx-4 mx-1 md:py-5 py-2">
                {
                    totalNumber > 0 ?
                        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-3">
                            {
                                giftsMoreTotal.map(giftsMore =>
                                    <div key={giftsMore?._id} className="w-full md:h-[420px] hover:shadow-xl transition-all duration-200 rounded overflow-hidden">
                                        <Link to={`/flowerDetails/${giftsMore?._id}`} className="">
                                            <img src={giftsMore?.flowerImg} loading='lazy' alt="flowerBirthday" className="w-full md:h-80 object-cover hover:scale-105 duration-200 transition-all" />
                                            <div className="px-2 pt-1">
                                                <h4 className="text-base md:font-semibold font-medium leading-tight">{giftsMore?.flowerName}</h4>
                                            </div>
                                        </Link>
                                        <div className="flex items-center justify-between px-2 py-1">
                                            <p>
                                                {
                                                    giftsMore?.offerPrice && <span className="md:text-lg text-base md:font-bold font-bold pr-2">{giftsMore?.offerPrice}</span>
                                                }
                                                <span className={`md:text-lg text-base md:font-bold font-bold ${giftsMore?.offerPrice && "line-through text-red-700"}`}>{giftsMore?.price + "$"}</span>
                                            </p>
                                            <div onClick={() => setCartAdd(!cartAdd)}>
                                                {
                                                    cartAdd ?
                                                        <IoFlowerSharp onClick={() => setCartAdd(true)} />
                                                        :
                                                        <IoFlowerOutline onClick={() => setCartAdd(false)} />
                                                }
                                            </div>
                                        </div>
                                    </div>)
                            }
                        </div>
                        :
                        <NoFoundData />
                }
            </div>
        </>
    );
};

export default SaleFlower;