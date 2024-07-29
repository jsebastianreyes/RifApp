import styled from 'styled-components'
import viteLogo from '/vite.svg'

const HeaderStyled = styled.div`

`

function Header() {
    return (
        <HeaderStyled>
        <h1>   
          <img src={viteLogo} className="logo" alt="Vite logo" />   
        </h1>
        <nav>
           <span>Instrucciones</span>
           <span>Premio</span>
        </nav>
     
        </HeaderStyled>
    )
}

export default Header
