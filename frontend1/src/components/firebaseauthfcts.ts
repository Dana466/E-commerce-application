
import {auth} from "./firebaeSetup.ts";
import {GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

interface LoginFormValues {
  email: string;
  password: string;
}

interface UserFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const registerUser = async ({ email, password, confirmPassword }: UserFormValues) => {
  if (password !== confirmPassword) {
    throw new Error('Passwords do not match');
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    //throw new Error(error.toString());
    console.log(error);
    console.log("error occurs");
  }
};

const loginUser = async ({ email, password }: LoginFormValues) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert("Succesfulluy login in after registrartion");
    return userCredential.user;
  } catch (error) {
   // throw new Error(error.message);
   console.log(error);
    console.log("error occurs");
  }
};

const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    //throw new Error(error.message);
    console.log(error);
    console.log("error occurs");
  }
};

const signinwithGoogle= async(e:React.FormEvent) =>{
  
  signInWithPopup(auth, new GoogleAuthProvider())
  .then(response => {
      console.log(response.user.uid);
      alert('aSuccessful sign up with google ')
    
  })
  .catch(error => {
      console.log(error);
      
  });
}



export { registerUser, loginUser, signinwithGoogle,logoutUser };