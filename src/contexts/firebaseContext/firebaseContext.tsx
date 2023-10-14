import { FirebaseApp, initializeApp } from "firebase/app";
import {
  Auth,
  GoogleAuthProvider,
  User,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useState, useEffect } from "react";
export const firebaseConfig = {
  apiKey: "AIzaSyDJmvEC3NOgEesqDEvASnYL3V59y1T6POk",
  authDomain: "dwarakamai-vizag.firebaseapp.com",
  projectId: "dwarakamai-vizag",
  storageBucket: "dwarakamai-vizag.appspot.com",
  messagingSenderId: "1022370352103",
  appId: "1:1022370352103:web:44d73af68fb3924780cb42",
  measurementId: "G-GDG2Y5CNW0",
};
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseUser: User | null = null;

export interface IFirebaseContext {
  firebaseApp: FirebaseApp;
  firebaseAuth: Auth;
  firebaseUser: User | null;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<User | null>;
}

export const FirebaseContext = createContext<IFirebaseContext>({
  firebaseApp,
  firebaseAuth,
  firebaseUser,
  signOut: async () => {},
  signInWithGoogle: async () => null,
});

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export const FirebaseContextProvider: React.FC<Props> = ({ children }) => {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const _userCredential = await signInWithPopup(firebaseAuth, provider);
    setFirebaseUser(_userCredential.user);
    return _userCredential.user;
  };
  const signOut = async () => {
    const isConfirm = window.confirm("Are you sure? Do you want to logut");
    if (isConfirm) {
      await firebaseAuth.signOut();
      setFirebaseUser(null);
    }
  };
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      setFirebaseUser(user);
    });
  }, []);
  return (
    <>
      <FirebaseContext.Provider
        value={{
          firebaseApp,
          firebaseAuth,
          firebaseUser,
          signInWithGoogle,
          signOut,
        }}
      >
        {children}
      </FirebaseContext.Provider>
    </>
  );
};
