import styled from 'styled-components'

const SquareStyled = styled.div`

`

function Square({number}) {
    return (
        <SquareStyled>
            {number}
        </SquareStyled>
    )
}

export default Square
