import styled from 'styled-components'

const HeaderStyled = styled.header`

  h1{
   
      margin: 0;
      padding: 0;
      text-align: center;
      color: #707072;
      margin-block-start: 2rem;
      font-size: 3rem;
      letter-spacing: 2px;
    
  }
`

function Header() {
    return (
        <HeaderStyled>
            <h1> 🍀RifApp</h1>
           
        </HeaderStyled>
    )
}

export default Header
