import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { } from "react-icons/md";
import { IoAddCircleSharp, IoLogoPaypal } from "react-icons/io5";
import { GoDot } from "react-icons/go";
import { GiFlowerEmblem } from "react-icons/gi";

const IsAdmin = () => {
    const [order, handelOrder] = useState(false);
    const [offer, handelOffer] = useState(false);
    return (
        <div>
            <ul className="space-y-0">
                <li>
                    <NavLink
                        to="/dashboard/adminHome"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <FaHome className="text-xl" />
                        <span>Admin Home </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/addItem"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <IoAddCircleSharp className="text-xl" />
                        <span>Add Item </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/allUsers"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <FaUsers className="text-xl" />
                        <span>All Users </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/totalFlowerItems"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <GiFlowerEmblem className="text-xl" />
                        <span>Total Flower  </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/allPayment"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <IoLogoPaypal className="text-xl" />
                        <span>All Payment </span>
                    </NavLink>
                </li>
                
                {/* order link start */}
                <div className="pb-2">
                    <button onClick={() => handelOrder(!order)} className="flex items-center justify-between w-full text-base font-medium py-1 pl-2 hover:bg-slate-100 rounded bg-slate-100 text-slate-600 uppercase transition-all duration-200 mt-3">
                        <span>Order information</span>
                        {
                            order ?
                                <BsChevronDown />
                                : <BsChevronUp />
                        }
                    </button>
                </div>
                {
                    order && <div className="space-y-2 pl-2">
                        <li className=" w-full">
                            <NavLink
                                to="/dashboard/handDelivery"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span>Hand Delivery </span>
                            </NavLink>
                        </li>
                        <li className=" w-full">
                            <NavLink
                                to="/dashboard/cashOnDelivery"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span>Cash On Delivery </span>
                            </NavLink>
                        </li>
                        <li className=" w-full">
                            <NavLink
                                to="/dashboard/successOrder"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span>Success Order</span>
                            </NavLink>
                        </li>
                        <li className=" w-full">
                            <NavLink
                                to="/dashboard/retuneOrder"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span>Retune Order</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/orderCancel"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span>Order Cancel</span>
                            </NavLink>
                        </li>
                    </div>
                }
                {/* order link end */}

                {/* offer link start */}
                <div className="pb-2">
                    <button onClick={() => handelOffer(!offer)} className=" flex items-center justify-between w-full text-base font-medium py-1 pl-2 hover:bg-slate-100 rounded bg-slate-100 text-slate-600 uppercase transition-all duration-200">
                        <span>Offer & Change Section</span>
                        {
                            offer ?
                                <BsChevronDown />
                                : <BsChevronUp />
                        }
                    </button>
                </div>
                {
                    offer && <div className="space-y-2 pl-2 pt-2">
                        <li className="w-full">
                            <NavLink
                                to="/dashboard/bestOffer"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span>Best Offer </span>
                            </NavLink>
                        </li>
                        <li className=" w-full">
                            <NavLink
                                to="/dashboard/sliderChanges"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span>Slider Changes </span>
                            </NavLink>
                        </li>
                        <li className=" w-full">
                            <NavLink 
                                to="/dashboard/bannerChanges" //section banner change korar jonno kora hoice
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span>Banner Change</span>
                            </NavLink>
                        </li>
                        <li className=" w-full">
                            <NavLink
                                to="/dashboard/leftRightBanner" //section banner ar shathe je banner ashe shegula  change korar jonno kora hoice
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span>left&Right B.</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/footerChange"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span>Footer Change</span>
                            </NavLink>
                        </li>
                    </div>
                }
                {/* offer link end */}

                {/* messages section start */}
                <p className="py-2 mt-1 pl-3 text-slate-600 font-semibold text-base uppercase bg-slate-100">Help section</p>
                <li>
                    <NavLink
                        to="/dashboard/email"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <span>Email </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/chat"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <span>Chat </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/calender"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <span>Calender </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/adminProfile"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <span>Profile </span>
                    </NavLink>
                </li>
                {/* messages section end */}
            </ul>
        </div>
    );
};

export default IsAdmin;