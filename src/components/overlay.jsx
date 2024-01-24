import styled from 'styled-components'

const OverlayStyled = styled.div`
   backdrop-filter: blur(9px);
   position: fixed;
   inset: 0;
   
`

function Overlay({children}) {
    return (
        <OverlayStyled>
            {children}
        </OverlayStyled>
    )
}

export default Overlay
