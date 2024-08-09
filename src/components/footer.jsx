import styled from 'styled-components'
import Wrapper from './wrapper'
const FooterStyled = styled.div`

`

function Footer() {
    return (
        <Wrapper>
            <FooterStyled>
            <p>©All Rights Reserved | Developed by Sebastián Reyes 🫡</p>
            <p>
                <span>Contáctenos</span> 
                <span>Politicas de Privacidad</span>
            </p>
           
        </FooterStyled>
        </Wrapper>
        
    )
}

export default Footer
