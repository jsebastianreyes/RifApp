import styled from 'styled-components'
import Square from './square'
import { useState } from 'react'


const BoardStyled = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
    gap: 1rem;

    margin-block: 3rem;
    margin-inline: 2rem;

`

function Board() {
    const numbers = Array(100).fill()
    const [selectedNumbers, setSelectedNumbers] = useState([])
    console.log(selectedNumbers)
    return (
        <BoardStyled>
            {numbers.map((el, i) => {
                return <Square 
                key={`square-${i}`}
                number={i}
                setSelectedNumbers={setSelectedNumbers}
                />
            })}
        </BoardStyled>
    )
}

export default Board
