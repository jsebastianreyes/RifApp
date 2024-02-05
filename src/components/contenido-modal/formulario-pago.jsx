import styled from 'styled-components'

const FormularioPagoStyled = styled.div`

    form{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        margin-block: 1rem;
    }

    form input{
        font: var(--baseFont);
        border-radius: .5rem;
        border: 1px solid #ccc;
        padding:.4rem 1rem;
    }

    form input[type="submit"]{
        background-color: #000;
        margin-block-start: .4rem;
        color: white;
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: .5px;
        border: 0;
        padding-block: .5rem;

    }
`

function FormularioPago() {
    return (
        <FormularioPagoStyled>
            <form action="">
                <input type="text" name="" id="" placeholder='Nombre completo' required />
                <input type="tel" name="" id="" placeholder='Celular' required />
                <input type="email" name="" id="" placeholder='email' required/>
                <input type="submit" value="Enviar" />
            </form>
          
        </FormularioPagoStyled>
    )
}

export default FormularioPago
