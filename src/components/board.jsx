import styled from 'styled-components'
import Square from './square'
import { useState, useRef, useEffect } from 'react'
import {  onSnapshot, collection } from "firebase/firestore"; 
import { db } from '../firebase/config';
import Button from './button';





const BoardStyled = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
    gap: 1rem;

    margin-block: 3rem;
    margin-inline: 2rem;

`

function Board() {
    const [numbersSold, setNumbersSold] = useState([])

    useEffect(()=>{
        onSnapshot(collection(db, 'board'),
        (querySnapshot)=> {
          let listUsers = []
          querySnapshot.forEach((doc) => {
            listUsers.push(doc.data().numeros) 
          })  
           
           return setNumbersSold(listUsers)
        })  
    },[])

    

    const numbers = Array(100).fill()
    const [selectedNumbers, setSelectedNumbers] = useState([])
    const uuid = useRef(self.crypto.randomUUID())
    return (
        <>
         <BoardStyled>
            {numbers.map((el, i) => {
                return <Square 
                key={`square-${i}`}
                number={i}
                setSelectedNumbers={setSelectedNumbers}
                selectedNumbers={selectedNumbers}
                uuid={uuid.current}
                numbersSold={numbersSold.flat()}
                />
            })}

        </BoardStyled>
            {selectedNumbers.length > 0 ? <Button text="pagar"/> : null}

        </>
       
    )
}

export default Board
