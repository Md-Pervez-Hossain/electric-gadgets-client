import React, { Children, createContext, useEffect, useState } from "react";
import app from "../FireBase/FireBaseConfig.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
const auth = getAuth(app);
export const UserContext = createContext();
const AuthContext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [deleteData, setDeleteData] = useState([]);

  const makeUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateName = (name) => {
    setIsLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const EmailVerification = (email) => {
    setIsLoading(true);
    return sendEmailVerification(auth.currentUser, email);
  };
  const googleSignup = (googleProvider) => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const userLogout = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:5000/cartpage")
  //     .then((res) => res.json())
  //     .then((data) => setCart(data))
  //     .catch((error) => console.error(error));
  // }, [setCart]);

  const removeAddToCart = (cartProduct) => {
    const agree = window.confirm("Are you Sure You Want To Delete ?");
    console.log(cartProduct._id);
    if (agree) {
      fetch(`http://localhost:5000/cartpage/${cartProduct?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    isLoading,
    makeUser,
    updateName,
    EmailVerification,
    googleSignup,
    userLogout,
    userLogin,
    removeAddToCart,
    deleteData,
  };
  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
