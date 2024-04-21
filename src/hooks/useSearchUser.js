import { async } from '@firebase/util';
import { getDocs, query } from 'firebase/firestore';
import  { useState } from 'react'
import { firestore } from '../firebase/firebase';
import { collection } from 'firebase/firestore';
import { where } from 'firebase/firestore';
import useShowToast from './useShowToast';

const useSearchUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const showToast = useShowToast();

  const getUserProfile = async (username) => {
    setIsLoading(true);
    setUser(null);
    try {
        const q = query(collection(firestore, "users"), where("username", "==", username));

        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) return showToast("Error", "User not found", "error");

        // querySnapshot.forEach((doc) => {
        //     setUser(doc.data());
        // });
    } catch (error) {
        showToast("Error", error.message, "error");
        setUser(null);
    } finally {
        setIsLoading(false);
    }
};
  return { isLoading, getUserProfile, user, setUser };
}

export default useSearchUser
