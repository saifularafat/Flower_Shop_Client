import { Helmet } from "react-helmet-async";
import DashboardTitle from "../../../../../components/DashboardTitle";
import { GiLotusFlower } from "react-icons/gi";
import { Link } from "react-router-dom";
import footerChange from "../../../../../api/useFooterGet";
import DataLoading from "../../../../../Share/Loading/DataLoading";

const FooterChange = () => {
    const [footerGet, refetch,isLoading] = footerChange();
    const wayToShops = footerGet.find(footer => footer.category === "wayToShop");
    const customService = footerGet.find(footer => footer.category === "customServer");
    const ourStores = footerGet.find(footer => footer.category === "ourStores");
    const corporate = footerGet.find(footer => footer.category === "corporate");
    console.log(wayToShops);

    if(isLoading){
        return <DataLoading />
    }
    return (
        <div>
            <Helmet><title>Flower Shop || Best Offer</title></Helmet>
            <DashboardTitle borderColor="border-slate-600" borderStyle=" border" borderWidth=" w-2/12" Icon={GiLotusFlower} textColor="" title="Footer" />
            <div className="overflow-x-auto md:py-8 py-3">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Footer Title</th>
                            <th>Category </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                {wayToShops?.wayToShop}
                            </td>
                            <td>{wayToShops?.category}</td>
                            {
                                wayToShops ?
                                    <div className="flex items-center gap-2 mt-4">
                                        <div>
                                            <button disabled className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</button>
                                        </div>
                                        <div>
                                            <Link to={`/dashboard/footerChange/footerEdit/${wayToShops?._id}`} className="file-sm font-medium tracking-wider bg-green-700 rounded-md py-1 px-3 text-white hover:bg-green-500 hover:text-slate-200 transition-all duration-200">Edit</Link>
                                        </div>
                                    </div>
                                    :
                                    <div className="flex items-center gap-2 mt-4">
                                        <div>
                                            <Link to="/dashboard/footerChange/footerWayToShop" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                        </div>
                                        <div>
                                            <button disabled className="file-sm font-medium tracking-wider bg-green-700 rounded-md py-1 px-3 text-white hover:bg-green-500 hover:text-slate-200 transition-all duration-200">Edit</button>
                                        </div>
                                    </div>
                            }
                        </tr>
                        <tr>
                            <td>
                                {customService?.customService}
                            </td>
                            <td>{customService?.category}</td>
                            {
                                customService ?
                                    <div className="flex items-center gap-2 mt-4">
                                        <div>
                                            <button disabled className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</button>
                                        </div>
                                        <div>
                                            <Link to={`/dashboard/footerChange/footerEdit/${customService?._id}`} className="file-sm font-medium tracking-wider bg-green-700 rounded-md py-1 px-3 text-white hover:bg-green-500 hover:text-slate-200 transition-all duration-200">Edit</Link>
                                        </div>
                                    </div>
                                    :
                                    <div className="flex items-center gap-2 mt-4">
                                        <div>
                                            <Link to="/dashboard/footerChange/footerCustomService" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                        </div>
                                        <div>
                                            <button disabled className="file-sm font-medium tracking-wider bg-green-700 rounded-md py-1 px-3 text-white hover:bg-green-500 hover:text-slate-200 transition-all duration-200">Edit</button>
                                        </div>
                                    </div>
                            }

                        </tr>
                        <tr>
                            <td>
                                {ourStores?.ourStores}
                            </td>
                            <td>{ourStores?.category}</td>
                            {
                                ourStores ?
                                    <div className="flex items-center gap-2 mt-4">
                                        <div>
                                            <button disabled className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</button>
                                        </div>
                                        <div>
                                            <Link to={`/dashboard/footerChange/footerEdit/${ourStores?._id}`} className="file-sm font-medium tracking-wider bg-green-700 rounded-md py-1 px-3 text-white hover:bg-green-500 hover:text-slate-200 transition-all duration-200">Edit</Link>
                                        </div>
                                    </div>
                                    :
                                    <div className="flex items-center gap-2 mt-4">
                                        <div>
                                            <Link to="/dashboard/footerChange/footerOurStores" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                        </div>
                                        <div>
                                            <button disabled className="file-sm font-medium tracking-wider bg-green-700 rounded-md py-1 px-3 text-white hover:bg-green-500 hover:text-slate-200 transition-all duration-200">Edit</button>
                                        </div>
                                    </div>
                            }
                        </tr>
                        <tr>
                            <td>
                                {corporate?.corporate}
                            </td>
                            <td>{corporate?.category}</td>
                            {
                                corporate ?
                                    <div className="flex items-center gap-2 mt-4">
                                        <div>
                                            <button disabled className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</button>
                                        </div>
                                        <div>
                                            <Link to={`/dashboard/footerChange/footerEdit/${corporate?._id}`} className="file-sm font-medium tracking-wider bg-green-700 rounded-md py-1 px-3 text-white hover:bg-green-500 hover:text-slate-200 transition-all duration-200">Edit</Link>
                                        </div>
                                    </div>
                                    :
                                    <div className="flex items-center gap-2 mt-4">
                                        <div>
                                            <Link to="/dashboard/footerChange/footerCorporate" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                        </div>
                                        <div>
                                            <button disabled className="file-sm font-medium tracking-wider bg-green-700 rounded-md py-1 px-3 text-white hover:bg-green-500 hover:text-slate-200 transition-all duration-200">Edit</button>
                                        </div>
                                    </div>
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FooterChange;