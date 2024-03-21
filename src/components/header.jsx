import styled from 'styled-components'
import { useContext } from 'react'
import { GlobalData } from '../context/variables-globales'

const HeaderStyled = styled.header`

   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-block: 1.2rem;
   flex-wrap: wrap;
   

   nav{
    display: flex;
    gap: 2rem;
    font-size: 1.2rem;
    /* font-weight: 600; */
    /* text-transform: uppercase; */
   }

  h1{
   
      margin: 0;
      padding: 0;
      text-align: center;
      color: #606062;
      font-size: 2.5rem;
      letter-spacing: -5px;
      font: var(--fontTitle);
      font-weight: 600;
      /* text-shadow: 1px 1px 4px red; */
    
  }

  h1 span{
    margin-inline-end: 5px;
  }

  nav span{
    cursor: pointer;
    transition: 1s;

  }

  nav span:hover{
    text-decoration: underline;
  }
`

function Header() {
  const {setModalConfig} = useContext(GlobalData)

   const handleModalPremio = () => {
    setModalConfig(prev => {
      return {visibility: true, template: 'premio'}
      })
   }

   const handleModalInstrucciones = () => {
    setModalConfig(prev => {
      return {visibility: true, template: 'instrucciones'}
       })
   }

    return (
        <HeaderStyled>
            <h1> <span>🍀</span>RifApp</h1>
            <nav>
               <span onClick={handleModalPremio}>Premio</span>
               <span onClick={handleModalInstrucciones}>Instrucciones</span>
            </nav>     
        </HeaderStyled>
    )
}

export default Header
