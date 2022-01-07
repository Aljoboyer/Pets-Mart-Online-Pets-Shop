import { useEffect, useState } from "react";
import {signOut ,signInWithPopup, GoogleAuthProvider ,onAuthStateChanged, signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, updateProfile, User, Auth } from "firebase/auth";
import InitializationApp from "../../../FirebaseSetup/FirebaseInit";
import { NavigateFunction, Location } from "react-router-dom";

interface UserData {
    email?: string,
    accessToken?: string,
    displayName?: string | null
}

InitializationApp()
const useFirebase = () =>  {
    const [user, setUser] = useState<UserData | User | undefined>();
    const auth: Auth = getAuth();
    const [regError, setRegError] = useState<string>('');
    const [logError, setLogError] = useState<string>('');
    const [isloading, setIsloading] = useState<boolean>(true)
    const googleProvider = new GoogleAuthProvider();

    //Register User
    const RegisterUser = (email: string, password: string, name: string) => {
        setIsloading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
            //saving user to database
            SaveUser(email, name)
            //user profile update
            // updateProfile(auth.currentUser: User, {
            //     displayName: "Jane Q. User"
            //   }).then(() => {
            //     // Profile updated!
            //     // ...
            //   }).catch((error) => {
            //     // An error occurred
            //     // ...
            //   });
            alert('Register Successfull')
        })
        .catch((error) => {
            console.log('from register user', error.message);
            setRegError(error.message)
        }).finally(() => setIsloading(false));
    }
    
    //Login User
    const LogInUser = (email: string, password: string, navigate:  NavigateFunction, location: Location) => {
        setIsloading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user)
            const destination = location?.state?.from || '/';
          navigate(destination)
    
        })
        .catch((error) => {
            setLogError(error.message)
        }).finally(() => setIsloading(false));
    }
    //google sign in
    const GoogleSignIn = () => {
        setIsloading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setUser(user)
        }).catch((error: {message: string}) => {
                setLogError(error.message)
        }).finally(() => setIsloading(false));
    }
    //get currently sign in user
    useEffect(() => {
        setIsloading(true)
        onAuthStateChanged(auth, (user: User | null) => {
            if (user) {
              const uid = user.uid;
              setUser(user)
      
            } else {

            }
            setIsloading(false)
          });
    },[auth])
    //saving user info to database
    const SaveUser = (email: string, name: string) => {
        const newuser = {email, name}
        fetch('http://localhost:5000/saveuser',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newuser)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    //log--out user 
    const LogOutUser = (navigate: NavigateFunction) => {
        setIsloading(true)
        signOut(auth).then(() => {
            setUser({});
            navigate('/')
          }).catch((error) => {
            // An error happened.
          }).finally(() => setIsloading(false));
    }
    return {
        user,
        setUser,
        RegisterUser,
        regError,
        LogInUser,
        logError,
        GoogleSignIn,
        LogOutUser,
        isloading
    }
}

export default useFirebase;