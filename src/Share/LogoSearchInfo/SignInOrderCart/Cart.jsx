import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div>
            <Link to="" className="flex-1 items-center text-center">
                <div className="w-full mx-auto">
                    <GrCart className="md:w-8 md:h-8 w-7 h-7 mx-auto md:text-[#282A33] text-slate-100" />
                </div>
                <span className="text-xs font-medium text-center md:block hidden">(0) Cart</span>
                <span className="text-xs font-medium text-center md:text-[#282A33] text-slate-100 md:hidden flex items-center"> Cart <span className="text-xs">(0)</span></span>
            </Link>
        </div>
    );
};

export default Cart;