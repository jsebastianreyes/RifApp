import styled from 'styled-components'
import viteLogo from '/vite.svg'
import Wrapper from './wrapper'
const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .menu{
    display: flex;
    gap: 1rem;
  }

`

function Header() {
    return (
       <Wrapper>
            <HeaderStyled>
              <h1>   
                <img src={viteLogo} className="logo" alt="Vite logo" />   
              </h1>
              <nav className='menu'>
                <span>Instrucciones</span>
                <span>Premio</span>
              </nav>
          </HeaderStyled>
       </Wrapper>
      
    )
}

export default Header
