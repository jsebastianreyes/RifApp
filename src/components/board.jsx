import styled from 'styled-components'

const BoardStyled = styled.div`

`

function Board() {
    const board = Array(100).fill()
    return (
        <BoardStyled>
            {
                board.map((number,index) => { return index })
            }
        </BoardStyled>
    )
}

export default Board
