import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebaseAuth/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  // Create user Email and Password

  const createUser = (email, password) => {
    // setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

//   Update user profile image and name
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // sign in with email and password

  const signIn = (email, password)=>{
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
};

  //   sign in with google
  const signInWithGoogle = (provider) => {
    // setLoading(true);
    return signInWithPopup(auth, provider);
  };

// Log out for user
const logOut = () => {
  // setLoading(true);
  return signOut(auth);
}

  //   useEffect for keep catching user by OnAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //   console.log("user inside state change", currentUser);
      // if (currentUser == null || currentUser.emailVerified) {
        setUser(currentUser);
      // }
      //   setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  });

  // declar a variable for context api
  const authentic = { user, createUser, updateUserProfile, signIn,signInWithGoogle, logOut };

  return (
    <AuthContext.Provider value={authentic}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
