import PageTitleAndDescription from "../../components/PageTitleAndDescription";
import bannerImage from "../../assets/disney/disney-banner.webp"
import { Link } from "react-router-dom";
import disney1 from "../../assets/disney/158448sx.webp"
import disney2 from "../../assets/disney/158448sx.webp"
import disney3 from "../../assets/disney/158449s_orange_plx.webp"
import disney4 from "../../assets/disney/158450llx.webp"
import disney5 from "../../assets/disney/191052lx.webp"
import disney6 from "../../assets/disney/191053x.webp"
import disney7 from "../../assets/disney/191055sdmlv1_yellowx.webp"
import disney8 from "../../assets/disney/191057mdmv1dmp1x.webp"
import disney9 from "../../assets/disney/191058mdmv1dmp1_yellowx.webp"
import disney10 from "../../assets/disney/193254mp1x.webp"
import disney11 from "../../assets/disney/193255mb_sb_greenx.webp"
import disney12 from "../../assets/disney/196154s_ltpurplex.webp"
import disney13 from "../../assets/disney/196155s_ltpurplex.webp"
import disney14 from "../../assets/disney/260541_redx.webp"
import disney15 from "../../assets/disney/disney-flowers-ic-2col.webp"

const Disney = () => {
    return (
        <>
            <div className="mx-4 py-10">
                <PageTitleAndDescription
                    path="/disney"
                    name="Disney Flowers"
                    pageTitle="Bouquets & Arrangements"
                    title="Disney Flowers"
                    borderBG="bg-slate-300"
                    des1="Introducing our newest collection of Disney flowers in beautifully decorated featuring everyone’s favorite classic characters! Mickey, Minnie, Goofy, "
                    textLink1=""
                    linkName1=""
                    des2="and more adorn these vases, bringing the magic of Disney into any home or office. These Disney bouquets & flower arrangements"
                    textLink2=""
                    linkName2=""
                    des3="to any Disney fan’s home, adding a touch of wonder and enchantment to their décor."
                />
            </div>
            <div className="mx-0 pb-12 border-0 border-b border-slate-400">
                <img src={bannerImage} loading='lazy' alt="banner" />
            </div>
            <div className="mx-4 py-5">
                <div className="grid grid-cols-4 gap-5">
                    <Link to="" className="w-full h-[420px] space-y-3 hover:shadow-md transition-all duration-200 rounded overflow-hidden">
                        <img src={disney1} loading='lazy' alt="flower" className="w-full h-80 object-cover" />
                        <div className=" px-1">
                            <h4 className="text-lg font-semibold leading-tight">Disney Mickey Mouse & Minnie Mouse Poinsettia</h4>
                            <p className="text-lg font-bold">$54.99</p>
                        </div>
                    </Link>
                    <Link to="" className="w-full h-[420px] space-y-3 hover:shadow-md transition-all duration-200 rounded overflow-hidden">
                        <img src={disney4} loading='lazy' alt="flower" className="w-full h-80 object-cover" />
                        <div className=" px-1">
                            <h4 className="text-lg font-semibold leading-tight">Disney Mickey Mouse & Friends Holiday Spruce</h4>
                            <p className="text-lg font-bold">$69.99 - $74.99</p>
                        </div>
                    </Link>
                    <Link to="" className="w-full h-[420px] space-y-3 hover:shadow-md transition-all duration-200 rounded overflow-hidden">
                        <img src={disney3} loading='lazy' alt="flower" className="w-full h-80 object-cover" />
                        <div className=" px-1">
                            <h4 className="text-lg font-semibold leading-tight">Disney Mickey & Minnie Rose Plant</h4>
                            <p className="text-lg font-bold">$44.99</p>
                        </div>
                    </Link>
                    <Link to="" className="w-full h-[420px] space-y-3 hover:shadow-md transition-all duration-200 rounded overflow-hidden">
                        <img src={disney2} loading='lazy' alt="flower" className="w-full h-80 object-cover" />
                        <div className=" px-1">
                            <h4 className="text-lg font-semibold leading-tight">Friends Cookie Jar</h4>
                            <p className="text-lg font-bold">$59.99 - $79.99</p>
                        </div>
                    </Link>
                    <Link to="" className="w-full h-[420px] space-y-3 hover:shadow-md transition-all duration-200 rounded overflow-hidden">
                        <img src={disney5} loading='lazy' alt="flower" className="w-full h-80 object-cover" />
                        <div className=" px-1">
                            <h4 className="text-lg font-semibold leading-tight">Disney Mickey Mouse & Friends Holiday Cookie Jar</h4>
                            <p className="text-lg font-bold">$59.99 - $79.99</p>
                        </div>
                    </Link>
                    <Link to="" className="w-full h-[420px] space-y-3 hover:shadow-md transition-all duration-200 rounded overflow-hidden">
                        <img src={disney6} loading='lazy' alt="flower" className="w-full h-80 object-cover" />
                        <div className=" px-1">
                            <h4 className="text-lg font-semibold leading-tight">a-Dog-able® Disney Mickey Mouse for Holiday</h4>
                            <p className="text-lg font-bold">$59.90</p>
                        </div>
                    </Link>
                    <Link to="" className="w-full h-[420px] space-y-3 hover:shadow-md transition-all duration-200 rounded overflow-hidden">
                        <img src={disney7} loading='lazy' alt="flower" className="w-full h-80 object-cover" />
                        <div className=" px-1">
                            <h4 className="text-lg font-semibold leading-tight">Disney Mickey Mouse & Minnie Mouse in Love Vase with Pink Rose</h4>
                            <p className="text-lg font-bold">$69.99 - $84.99</p>
                        </div>
                    </Link>
                    <Link to="" className="w-full h-[420px] space-y-3 hover:shadow-md transition-all duration-200 rounded overflow-hidden">
                        <img src={disney8} loading='lazy' alt="flower" className="w-full h-80 object-cover" />
                        <div className=" px-1">
                            <h4 className="text-lg font-semibold leading-tight">Disney Mickey Mouse Vase With Assorted Gerbera Daisies</h4>
                            <p className="text-lg font-bold">$79.99 - $94.99</p>
                        </div>
                    </Link>
                    <div className="col-span-2 cursor-pointer w-full  h-[420px] space-y-3 hover:shadow-md transition-all duration-200 rounded overflow-hidden">
                        <img src={disney15} loading='lazy' alt="flower" className="w-full h-80 object-cover" />

                    </div>
                    <Link to="" className="w-full h-[420px] space-y-3 hover:shadow-md transition-all duration-200 rounded overflow-hidden">
                        <img src={disney10} loading='lazy' alt="flower" className="w-full h-80 object-cover" />
                        <div className=" px-1">
                            <h4 className="text-lg font-semibold leading-tight">Disney Mickey Mouse Berries</h4>
                            <p className="text-lg font-bold">$39.99 - $104.99</p>
                        </div>
                    </Link>
                    <Link to="" className="w-full h-[420px] space-y-3 hover:shadow-md transition-all duration-200 rounded overflow-hidden">
                        <img src={disney9} loading='lazy' alt="flower" className="w-full h-80 object-cover" />
                        <div className=" px-1">
                            <h4 className="text-lg font-semibold leading-tight">Disney Mickey Mouse Vase With Assorted Roses</h4>
                            <p className="text-lg font-bold">$74.99 - $89.99</p>
                        </div>
                    </Link>
                    <Link to="" className="w-full h-[420px] space-y-3 hover:shadow-md transition-all duration-200 rounded overflow-hidden">
                        <img src={disney11} loading='lazy' alt="flower" className="w-full h-80 object-cover" />
                        <div className=" px-1">
                            <h4 className="text-lg font-semibold leading-tight">Disney Mickey Mouse Celebration Cake & Berries</h4>
                            <p className="text-lg font-bold">$69.99 - $114.99</p>
                        </div>
                    </Link>
                    <Link to="" className="w-full h-[420px] space-y-3 hover:shadow-md transition-all duration-200 rounded overflow-hidden">
                        <img src={disney12} loading='lazy' alt="flower" className="w-full h-80 object-cover" />
                        <div className=" px-1">
                            <h4 className="text-lg font-semibold leading-tight">Mickey & Pluto Birthday by Jim Shore</h4>
                            <p className="text-lg font-bold">$74.00</p>
                        </div>
                    </Link>
                    <Link to="" className="w-full h-[420px] space-y-3 hover:shadow-md transition-all duration-200 rounded overflow-hidden">
                        <img src={disney7} loading='lazy' alt="flower" className="w-full h-80 object-cover" />
                        <div className=" px-1">
                            <h4 className="text-lg font-semibold leading-tight">Disney Mickey Mouse & Minnie Mouse in Love Vase with Pink Rose</h4>
                            <p className="text-lg font-bold">$69.99 - $84.99</p>
                        </div>
                    </Link>
                    <Link to="" className="w-full h-[420px] space-y-3 hover:shadow-md transition-all duration-200 rounded overflow-hidden">
                        <img src={disney14} loading='lazy' alt="flower" className="w-full h-80 object-cover" />
                        <div className=" px-1">
                            <h4 className="text-lg font-semibold leading-tight">Disney’s Mickey Mouse & Friends Cookie Jar with Cookies</h4>
                            <p className="text-lg font-bold">$44.99</p>
                        </div>
                    </Link>
                    <Link to="" className="w-full h-[420px] space-y-3 hover:shadow-md transition-all duration-200 rounded overflow-hidden">
                        <img src={disney13} loading='lazy' alt="flower" className="w-full h-80 object-cover" />
                        <div className=" px-1">
                            <h4 className="text-lg font-semibold leading-tight">Fab Five Figurine by Jim Shore</h4>
                            <p className="text-lg font-bold">$115.00</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Disney;