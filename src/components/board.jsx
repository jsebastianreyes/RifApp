import styled from 'styled-components'
import Wrapper from './wrapper'
import Square from './square'

const BoardStyled = styled.main`
     display: grid;
    grid-template-columns: repeat(auto-fit, minmax(3rem,  1fr));
    gap: 1rem;

    margin-block: 1rem;
`

function Board() {
    const board = Array(100).fill()
    return (
        <Wrapper>
            <BoardStyled>
                {
                    board.map((number,index) => <Square key={`num-${index}`} index={index} />)
                }
            </BoardStyled>
        </Wrapper>
        
    )
}

export default Board
