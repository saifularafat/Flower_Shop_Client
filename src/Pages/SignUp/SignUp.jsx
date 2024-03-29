import signBanner from "../../assets/signUp/sign.jpg";
import logoImag from "../../assets/logo/logo.webp"
import celebrations from "../../assets/signUp/celebrations.webp"
import { useForm } from "react-hook-form";
import { AiOutlineEye } from "react-icons/ai"
import { PulseLoader } from "react-spinners";
import useAuth from "../../api/useAuth";
import { Link, useNavigate } from "react-router-dom";
import SocialSignUp from "../../Share/SocialSignUp/SocialSignUp";
import axios from "axios";
import Swal from "sweetalert2";
const SignUp = () => {
    const {
        register,
        formState: { errors },
        handleSubmit } = useForm();
    const {
        loading,
        setLoading,
        createUser,
        updateUserProfile
    } = useAuth();
    const navigate = useNavigate();

    //  click eya icon then show password
    const handleShowPass = () => {
        const passwordInput = document.getElementById("password");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    };

    const formSubmit = (data) => {
        console.log(data);
        const imageUrl = data.image[0];
        const formData = new FormData();
        formData.append('image', imageUrl)
        console.log(formData);
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_UPLOAD_KEY}`;

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                console.log(imageData);
                const imageAdders = imageData.data.url;
                createUser(data.email, data.password)
                    .then(result => {
                        console.log(result);
                        updateUserProfile(data.name, imageAdders)
                            .then(() => {
                                axios.post(`${import.meta.env.VITE_API_URL}/users`, {
                                    name: data.name,
                                    email: data.email,
                                    image: imageAdders,
                                    phoneNumber: '',
                                    address: '',
                                    gender: data.gender,
                                    role: 'client'
                                })
                                    .then(data => {
                                        console.log(data);
                                        if (data.insertedId) {
                                            Swal.fire({
                                                position: 'top-center',
                                                icon: 'success',
                                                title: 'Your SignUp Successful',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                        }
                                        navigate('/')
                                    })
                                    .catch((err) => {
                                        Swal.fire({
                                            position: 'top-center',
                                            icon: 'error',
                                            title: `${err.message}`,
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        setLoading(false)
                                    })
                            })
                    })
                    .catch(error => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: `${error.message}`,
                        })
                        setLoading(false)
                    })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                })
                setLoading(false)
            })
    }
    return (
        <div className="">
            <div
                style={{
                    backgroundImage: `url(${signBanner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "100vh",
                    width: "",
                }}
                className="flex items-center justify-center min-h-screen"
            >
                <div className="w-8/12 mx-auto grid grid-cols-8 gap-5">
                    <div className="bg-white/70 p-5 col-span-3 rounded-md relative md:block hidden">
                        <div className="bg-black/10 py-2 px-3 rounded-md ">
                            <Link to="/">
                                <img src={logoImag} alt="" className="w-1/2 mx-auto object-cover" />
                            </Link>
                        </div>
                        {/* <div className=" "> */}
                        <p className="absolute top-1/2 text-center text-base font-bold">Create an account for faster checkout and order tracking.</p>
                        {/* </div> */}
                        <img src={celebrations} alt="" className="w-10/12 mx-auto object-cover absolute bottom-3" />
                    </div>
                    <div className="bg-white/80 p-5 md:col-span-5 col-span-8 w-full mx-auto rounded-md">
                        <h3 className="text-2xl text-slate-950 font-semibold border-0 border-b-[2px] border-slate-500 pb-3">Create account</h3>
                        {/* Sign Up From */}

                        <form onSubmit={handleSubmit(formSubmit)} className="space-y-3 pt-3">
                            <div className="md:flex items-center gap-3">
                                <div>
                                    <label
                                        htmlFor='firstName'
                                        className='formLabel'>
                                        Name*
                                    </label>
                                    <input
                                        type='text'
                                        name='firstName'
                                        id='firstName'
                                        placeholder='Enter Your Name'
                                        className='formInput'
                                        required
                                        data-temp-mail-org='0'
                                        {...register("name", { required: true })}
                                    />
                                    {errors.name?.type === "required" && (
                                        <p className="text-red-600">Name is required</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="formLabel">Last Name</label>
                                    <input
                                        type='text'
                                        name='lastName'
                                        id='lastName'
                                        placeholder='Your Last Name '
                                        className='formInput'
                                        data-temp-mail-org='0'
                                        {...register("lastName", { required: true })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor='email' className='formLabel'>
                                    Email address*
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    required
                                    placeholder='Enter Your Email Here'
                                    className='formInput'
                                    data-temp-mail-org='0'
                                    {...register("email", { required: true })}
                                />
                                {errors.email?.type === "required" && (
                                    <p className="text-red-600">Email is required</p>
                                )}
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='formLabel'>
                                        Password*
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        type='password'
                                        name='password'
                                        id='password'
                                        required
                                        placeholder='*******'
                                        className='formInput'
                                        {...register("password",
                                            {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{6}/
                                            })}
                                    />
                                    {errors.password?.type === 'required' &&
                                        <p className="text-red-600 mt-1">Password is required</p>
                                    }
                                    {errors.password?.type === 'minLength' &&
                                        <p className="text-red-600 mt-1">Password must be 6 character</p>
                                    }
                                    {errors.password?.type === 'maxLength' &&
                                        <p className="text-red-600 mt-1">Password must be 20 character</p>
                                    }
                                    {errors.password?.type === 'pattern' &&
                                        <p className="text-red-600 mt-1">Password must have one Uppercase
                                            two lowercase one number and special character</p>
                                    }
                                    <AiOutlineEye
                                        onClick={handleShowPass}
                                        className="absolute top-3 right-3 cursor-pointer text-lg"
                                    ></AiOutlineEye>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-5">
                                <div className="w-full">
                                    <label htmlFor='image' className='formLabel'>
                                        Select Image:
                                    </label>
                                    <label htmlFor="image">
                                        <input
                                            required
                                            type='file'
                                            id='image'
                                            name='image'
                                            accept='image/*'
                                            hidden
                                            {...register("image", { required: true })}
                                        />
                                        <div className='w-full border border-slate-400 rounded-md cursor-pointer px-4 py-2'>
                                            upload your avatar
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor='gender' className='block text-base formLabel'>
                                        Gender:*
                                    </label>
                                    <select {...register("gender")} className="px-2 bg-transparent py-2 border border-slate-400 rounded-md">
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                        <option value="other">other</option>
                                    </select>
                                </div>
                            </div>
                            <label className=" inline-flex mt-2">
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    {...register("checkbox")}
                                    required
                                    className="w-4 h-4 rounded-full" />
                                <p className='md:pl-3 pl-1 text-sm font-open'>Accept
                                    <Link to='/terms' className='text-blue-600 text-sm underline md:pl-2'>Terms and Condition
                                    </Link>
                                </p>
                            </label>
                            <div className="">
                                <button
                                    type='submit'
                                    className='bg-blue-700 w-full text-xl font-semibold font-mono uppercase tracking-wider rounded-md py-1 text-white hover:bg-transparent hover:text-blue-900 border-2 hover:border-blue-900 border-blue-900 transition duration-200'
                                >
                                    {
                                        loading ? <PulseLoader className="mx-auto 
                                    animate-pulse"
                                            color="#FF3811"
                                            size={18} />
                                            :
                                            'Sign Up'
                                    }

                                </button>
                            </div>
                            <p className='px-6 text-lg text-center text-title-color'>
                                Already have an account?{' '}
                                <Link
                                    to='/signIn'
                                    className='hover:underline hover:text-color-btn text-teal-900 font-medium'
                                >
                                    Sign In
                                </Link>
                            </p>
                            <SocialSignUp />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;