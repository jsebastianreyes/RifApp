import styled from 'styled-components'

const WrapperStyled = styled.div`
    max-inline-size: 60rem;
    margin: auto;
    padding-inline: 1rem;
`

function Wrapper({children}) {
    return (
        <WrapperStyled>
            {children}
        </WrapperStyled>
    )
}

export default Wrapper
