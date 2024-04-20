import { NumberInputStepper } from "@chakra-ui/react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { AiFillSecurityScan } from "react-icons/ai";
import { auth, firestore } from "../firebase/firebase";
import useShowToast from "./useShowToast"
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";


const useLogin = () => {
    const showToast = useShowToast();

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const loginUser = useAuthStore((state) => state.login)

    const login = async(inputs) => {

        if(!inputs.email || !inputs.password){
            return showToast("Error", "Please fill in all fields", "error")
        }
        try{
            const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password)
            if(userCred){
                const userRef = doc(firestore, "users", userCred.user.uid)
                const userUID = await getDoc(userRef);
                localStorage.setItem("user-info", JSON.stringify(userUID.data()))
                loginUser(userUID.data());
                
            }

        }catch (error){
            showToast("Error", error.message, "error")
        }
    }

    return {loading, error, login}
}

export default useLogin
