import styled from 'styled-components'

const FormularioPagoStyled = styled.div`
    
    &{
        font: var(--baseFont);
    }

    form{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        margin-block: 2rem;
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
        border-radius: 2rem;
        outline: 0;

    }

    h2{
        text-align: center;
    }

    input::placeholder{
        color: #8f8f8f;
    }


`

function FormularioPago() {
    return (
        <FormularioPagoStyled>
            <h2>Numeros Seleccionados:</h2>
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
