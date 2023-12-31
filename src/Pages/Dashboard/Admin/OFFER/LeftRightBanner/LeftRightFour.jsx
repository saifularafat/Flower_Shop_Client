import axios from "axios";
import { useForm } from "react-hook-form";
import { GiTwirlyFlower } from "react-icons/gi";
import Swal from "sweetalert2";

const LeftRightFour = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()
    const hosting_image_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_UPLOAD_KEY}`
    const onSubmit = (data) => {
        const imgUrl = data.rightTwoImage[0];
        const formData = new FormData();
        formData.append("image", imgUrl)
        fetch(hosting_image_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const imageURL = imageData.data.display_url;
                const { LeftRightSerialFour, rightTwoContent, category } = data;
                const rightTwoInfo = {
                    rightTwoImage: imageURL,
                    LeftRightSerialFour,
                    rightTwoContent,
                    category
                }
                axios.post(`http://localhost:4000/leftRightImage`, rightTwoInfo)
                    .then(data => {
                        console.log(data);
                        if (data.data.insertedId) {
                            reset()
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "Right Two Upload Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            })
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">
                        <span className="label-file file-lg  font-semibold">Right Two</span>
                    </label>
                    <input
                        {...register("rightTwoImage", { required: true })}
                        type="file"
                        className="file-input file-input-bordered w-full " />
                    {errors.rightTwoImage?.type === "required" && (
                        <p className="text-red-600 text-sm">Right Image is required</p>
                    )}
                    

                    <label className="label">
                        <span className="label-text text-xl  font-semibold">Right Content Two *</span>
                    </label>
                    <input
                        {...register("rightTwoContent", { required: true })}
                        type="text"
                        placeholder="Please type Any Text"
                        className="file-input file-input-bordered w-full px-4" />
                    {errors.rightTwoContent?.type === "required" && (
                        <p className="text-red-600 text-sm">Right Content is required</p>
                    )}
                    <input
                        type="text"
                        placeholder=""
                        defaultValue="Left Right Serial Four"
                        {...register("LeftRightSerialFour")}
                        className="hidden"
                    />
                    <input
                        type="text"
                        placeholder=""
                        defaultValue="rightTwo"
                        {...register("category")}
                        className="hidden"
                    />
                    <div className="mt-4">
                        <button className="flex items-center justify-center w-full bg-blue-500 rounded-md py-[6px] text-white file-xl font-semibold tracking-wide">
                            Right Two
                            <GiTwirlyFlower className=" w-12 h-9 file-slate-100" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LeftRightFour;