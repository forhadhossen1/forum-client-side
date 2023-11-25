
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";

const GoogleLogin = () => {

    const { googleSignIn } = useAuth();
    // const axiosPublic = useAxiosPublic();
    // const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                // const userInfo = {
                //     name: result.user?.displayName,
                //     email: result.user?.email
                // }

                // axiosPublic.post('/users', userInfo)
                //     .then(res => {
                //         console.log(res.data)
                //         navigate('/');
                //     })
            })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-block">
                <FcGoogle className="text-2xl"></FcGoogle>
            </button>
        </div>
    );
};

export default GoogleLogin;