import styled from 'styled-components'
import Square from './square'
import { useContext } from 'react'
import { ButtonFloat } from './button';
import { GlobalData } from '../context/variables-globales';
import { useGetNumbersSold } from '../hooks/useGetNumbersSold';
import Preload from './preload';
const BoardStyled = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(3rem,  1fr));
    gap: 1rem;

    margin-block: 1rem;
    

`

function Board() {

    const {selectedNumbers, setModalConfig} = useContext(GlobalData)
    const {loading} = useGetNumbersSold()
    const numbers = Array(100).fill()


    const handleActivemodal = ()=> {
        setModalConfig(prev => {
        return {visibility: true, template: 'form'}

        })
    }
    
   
    return (
        <>
         {loading ?
            <Preload/> :
            <BoardStyled >
            {numbers.map((el, i) => {
                return <Square 
                key={`square-${i}`}
                number={i}
                />

            })}

        </BoardStyled> }
    
            {selectedNumbers.length > 0 ? <ButtonFloat text="pagar" onClick={handleActivemodal}/> : null}
        </>
       
    )
}

export default Board
