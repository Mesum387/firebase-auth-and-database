import {
     getAuth,
     createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged 
    } from "firebase/auth";
import app from "./firebaseconfig";
import { getDatabase ,ref, set,onValue  } from "firebase/database";


const auth = getAuth(app);
const database = getDatabase(app);
let signUpUser=(obj)=>{

   
  return  createUserWithEmailAndPassword(auth, obj.email, obj.password)
  

 
 

}
let loginUser=(obj)=>{
   return signInWithEmailAndPassword(auth, obj.email, obj.password)
 
}
// let logOutUser=()=>{
//     signOut(auth).then(() => {
//         // Sign-out successful.
//       }).catch((error) => {
//         // An error happened.
//       });
      
// }
// let checkAuthUser=()=>{
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//           // User is signed in, see docs for a list of available properties
//           // https://firebase.google.com/docs/reference/js/firebase.User
//           const uid = user.uid;
//           // ...
//         } else {
//           // User is signed out
//           // ...
//         }
//       });
// }
// databse methods
let sendData =(obj,nodeName,id)=>{
let reference=ref(database,`${nodeName}/${id?id:""}`);
return set(reference,obj);
  
}
let getData =(nodeName)=>{
  const dbRef = ref(database,nodeName);

  return onValue
  (dbRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
    console.log(childData)
     
      // ...
    });
  }, {
    onlyOnce: true
  });
}
export {signUpUser,loginUser,sendData,getData};