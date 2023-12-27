import { useForm } from "react-hook-form";
import { GiTwirlyFlower } from "react-icons/gi";

const LeftRightThree = () => {
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }
        return (
            <div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="label">
                            <span className="label-file file-lg  font-semibold">Left Two</span>
                        </label>
                        <input
                            type="file"
                            placeholder=""
                            defaultValue=""
                            {...register("imageThree")}
                            className="input input-bordered w-full file-base pt-1"
                        />
                        <input
                            type="text"
                            placeholder=""
                            defaultValue="Left Right Serial Three"
                            {...register("LeftRightSerialThree")}
                            className="hidden"
                        />
                        <div className="mt-4">
                            <button className="flex items-center justify-center w-full bg-blue-500 rounded-md py-[6px] text-white file-xl font-semibold tracking-wide">
                                Left Two
                                <GiTwirlyFlower className=" w-12 h-9 file-slate-100" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    export default LeftRightThree;