import styled from 'styled-components'

const SquareStyled = styled.div`

`

function Square({index}) {
    return (
        <SquareStyled>
            {index}
        </SquareStyled>
    )
}

export default Square
