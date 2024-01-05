import styled from 'styled-components'
import Square from './square'


const BoardStyled = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
    gap: 1rem;

    margin-block: 3rem;
    margin-inline: 2rem;

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
