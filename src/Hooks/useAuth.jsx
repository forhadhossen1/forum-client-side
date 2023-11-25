import { useContext } from "react";
import { AuthCointext } from "../Providers/AuthProviders";

const useAuth = () => {
   const auth = useContext(AuthCointext);
   return auth;
};

export default useAuth;