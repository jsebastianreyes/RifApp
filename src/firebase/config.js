// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, setDoc, getFirestore, onSnapshot, collection, deleteDoc } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoSOIPtbh3xQCmvrRZzkp1MdfzzrR7f60",
  authDomain: "rifapp-a1fc8.firebaseapp.com",
  projectId: "rifapp-a1fc8",
  storageBucket: "rifapp-a1fc8.appspot.com",
  messagingSenderId: "815956154325",
  appId: "1:815956154325:web:b2791bcc9cdf39b5740f5c",
  measurementId: "G-LN2W4095W8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const db = getFirestore(app);

// export const setNumbers = async ( {uuid, numbers, status='pending', data={}}) => {
//    const {nombre="*****", numero="******", email="*****" } = data
//     await setDoc(doc(db, "board", uuid), {
//         numeros: numbers,
//         status,
//         nombre,
//         numero,
//         email,
//       });
// }

export const setNumbers = async ( {uuid, numbers}) => {
  console.log(uuid)
   await setDoc(doc(db, "board", uuid), {
       numeros: numbers,
     });
}

export const getUsers = () => {
  
 onSnapshot(collection(db, 'board'),
  (querySnapshot)=> {
    let listUsers = []
    querySnapshot.forEach((doc) => {
      listUsers.push(doc.data().numeros) 
    })     
     return listUsers.map
  })  

  
}

export const deleteNumbers = async (uuid) => {
  await deleteDoc(doc(db, "board", uuid));
}
