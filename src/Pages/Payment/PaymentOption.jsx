import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const PaymentOption = () => {
    const { id } = useParams();
    console.log(id);
    const [selectSystem, setSelectSystem] = useState("sslPayment");

    const handleSystemChange = (e) => {
        setSelectSystem(e.target.value)
    }
    return (
        <div>
            <h3 className="text-center my-5 md:text-3xl text-xl font-bold">Choose Your Payment System</h3>
            <div className="flex flex-col items-center">
                <label
                    className={`cursor-pointer grid grid-cols-2  md:w-[460px] rounded-lg border   mt-4  p-10
          ${selectSystem === 'sslPayment' ? ' bg-primary' : 'bg-secondary'}
          `}
                >
                    <h1 className="md:text-lg md:font-semibold">SSL Payment System</h1>
                    <input
                        type='radio'
                        name='radio-1'
                        className='radio radio-danger ms-auto'
                        value='sslPayment'
                        checked={selectSystem === 'sslPayment'}
                        onChange={handleSystemChange}
                    />
                </label>
                <label
                    className={`cursor-pointer grid grid-cols-2 border-2 shadow-lg
           md:w-[460px] p-10 rounded-lg  mt-4
           ${selectSystem === 'stripePayment' ? ' bg-primary' : 'bg-secondary'
                        }
           
           `}
                >
                    <h1 className="md:text-lg md:font-semibold">Stripe Payment System</h1>
                    <input
                        type='radio'
                        name='radio-1'
                        className='radio radio-danger ms-auto'
                        value='stripePayment'
                        checked={selectSystem === 'stripePayment'}
                        onChange={handleSystemChange}
                    />
                </label>
                <label
                    className={`cursor-pointer grid grid-cols-2 border-2 shadow-lg
           md:w-[460px] p-10 rounded-lg  mt-4 mb-6
           ${selectSystem === 'cashOnDeliveryPayment' ? ' bg-primary' : 'bg-secondary'
                        }
           
           `}
                >
                    <h1 className="md:text-lg md:font-semibold">Cash On Delivery</h1>
                    <input
                        type='radio'
                        name='radio-1'
                        className='radio radio-danger ms-auto'
                        value='cashOnDeliveryPayment'
                        checked={selectSystem === 'cashOnDeliveryPayment'}
                        onChange={handleSystemChange}
                    />
                </label>
                <div className=" mb-4">
                    <Link to={`/${selectSystem}/${id}?flowerShop=${id}`}>
                        <button className='btn btn-primary'>Go to Payment Process</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentOption;