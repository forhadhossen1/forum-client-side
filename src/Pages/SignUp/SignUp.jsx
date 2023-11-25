import { useForm } from "react-hook-form";
import GoogleLogin from "../../Component/SocialLogin/GoogleLogin";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createUser, updateUserProfile } = useAuth();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                // updateUserProfile(data.name, data.photoUrl)
                //     .then(() => {
                //         const userInfo = {
                //             name: data.name,
                //             email: data.email,
                //         }
                //         axiosPublic.post('/users', userInfo)
                //             .then(res => {
                //                 if (res.data.insertedId) {
                //                     reset();
                //                     Swal.fire("User created Successfully");
                //                     navigate('/')
                //                 }
                //             })

                //     })
                //     .catch(error => console.log(error))
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <>
            <div className="hero min-h-screen">

                <div className="card flex-shrink-0 md:w-1/2 max-w-4xl shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h4 className="block text-4xl font-bold text-center tracking-normal antialiased relative text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                            Register Now
                        </h4>
                        <p className="font-bold text-center">Provide Your Info</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" required />
                            {errors.name && <span className="text-red-500">Name field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                            {errors.email && <span className="text-red-600">Email field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
                            })}
                                name="password" placeholder="password" className="input input-bordered" required />
                            {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less then 20 characters</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">Password must be one spacial characters, one lower and capitel letter</span>}

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" type="submit" value="Sign Up" />

                            <div className="divider ">OR</div>

                            <GoogleLogin>

                            </GoogleLogin>
                        </div>
                        <p className='text-center'>Already have an account<Link to='/login'><button className="btn btn-link">Login</button></Link> </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;