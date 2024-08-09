import styled from 'styled-components'

const WrapperStyled = styled.div`
   inline-size: 79rem;
   margin: auto;
   border: 1px solid red;
   padding: 0 1rem;
`

function Wrapper({children}) {
    return (
        <WrapperStyled>
            {children}
        </WrapperStyled>
    )
}

export default Wrapper
