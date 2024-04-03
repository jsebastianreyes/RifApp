import styled from 'styled-components'

const ErrorStyled = styled.div`
  text-align: center;
  font-weight: 200;
  font: var(--baseFont);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
`

function Error() {
    return (
        <ErrorStyled>
            <h1>UPSSSSSSS!! 🙈</h1>
            <p>Lo sentimos, tenemos problemas en procesar tu compra, intenta seleccionando otro número. 😞 </p>
        </ErrorStyled>
    )
}

export default Error
