import styled from 'styled-components'
import Square from './square'
import { useState, useEffect, useContext } from 'react'
import {  onSnapshot, collection } from "firebase/firestore"; 
import { db } from '../firebase/config';
import { ButtonFloat } from './button';
import { GlobalData } from '../context/variables-globales';





const BoardStyled = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
    gap: 1rem;

    margin-block: 1rem;
    

`

function Board() {


    const [numbersSold, setNumbersSold] = useState([])
    const {selectedNumbers, setModalConfig} = useContext(GlobalData)




    const handleActivemodal = ()=> {
        setModalConfig(prev => {
        return {visibility: true, template: 'form'}

        })
    }

    useEffect(()=>{
        onSnapshot(collection(db, 'board'),
        (querySnapshot)=> {
          let listUsers = []
          querySnapshot.forEach((doc) => {
            listUsers.push({
             numeros: doc.data().numeros,
             status: doc.data().status   
            })
        })  
        
        return setNumbersSold(listUsers)
    })  
},[])



    const numbers = Array(100).fill()
   
    return (
        <>
         <BoardStyled>
            {numbers.map((el, i) => {
                return <Square 
                key={`square-${i}`}
                number={i}
                numbersSold={numbersSold}
                />
            })}

        </BoardStyled>
            {selectedNumbers.length > 0 ? <ButtonFloat text="pagar" onClick={handleActivemodal}/> : null}
        </>
       
    )
}

export default Board
