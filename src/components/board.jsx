import styled from 'styled-components'
import Square from './square'


const BoardStyled = styled.main`

`

function Board() {
    const numbers = Array(100).fill()
    return (
        <BoardStyled>
            {numbers.map((el, i) => {
                return <Square key={`square-${i}`} number={i}/>
            })}
        </BoardStyled>
    )
}

export default Board
