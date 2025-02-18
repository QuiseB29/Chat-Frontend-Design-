import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebase';
import React from 'react';
import { ref, uploadBytesResumable, getDownloadURL, } from "firebase/storage";
import { doc, setDoc, } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'; 


const Register: React.FC = () => {
    const [err,setErr] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file= e.target[3].files[0];

        try {
            
            const res = createUserWithEmailAndPassword(auth, email, password) 
            

const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed',
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
     await updateProfile((await res).user,{
        displayName,
        photoURL:downloadURL
        
     }); 
     await setDoc(doc(db, "users", (await res).user.uid), {
        uid: (await res).user.uid,
        displayName,
        email,
        photoURL: downloadURL,
    })

    await setDoc(doc(db, "userChats", (await res).user.uid), {})
    navigate("/");
      
    });
  }
);

    }catch(err){
            setErr(true);

        }


    
       
    
    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat Box.</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Display Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <input style={{display:"none"}} type="file" id="file" accept="image/*" />
                    <label htmlFor ="file">
                        <img src="Add" alt="" />
                        <span>Avatar</span>
                    </label>
                    <button type="submit">Sign Up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    );
};

export default Register;


