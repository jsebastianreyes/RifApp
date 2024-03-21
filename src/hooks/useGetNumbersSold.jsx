import { useState, useEffect } from "react";
import {  onSnapshot, collection } from "firebase/firestore"; 
import { db } from '../firebase/config';

export function useGetNumbersSold (){

    const [numbersSold, setNumbersSold] = useState([])
    const [fullData, setFullData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(()=>{
        try {
            onSnapshot(collection(db, 'board'),
            (querySnapshot)=> {
              let listUsers = []
              querySnapshot.forEach((doc) => {
                // listUsers.push({
                //  numeros: doc.data().numeros,
                //  status: doc.data().status   
                // })

                listUsers.push(doc.data().numeros)
              })  
              
              setLoading(false)
              return setNumbersSold(listUsers.flat())
        })  
            
        } catch (error) {
            setError(error)
        }
        finally{
          // setLoading(false)
        }
       
   },[])

    return {numbersSold, loading, error}
}