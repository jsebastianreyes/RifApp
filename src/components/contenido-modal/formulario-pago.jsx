import styled from 'styled-components'
import Icon from '../icons'
import { useContext } from 'react'
import { GlobalData } from '../../context/variables-globales'

const FormularioPagoStyled = styled.div`
    
    &{
        font: var(--baseFont);
    }

    p{
        font: var(--baseFontLogo);
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
        text-decoration: underline;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: .7rem;
        margin-block: 2rem;
    }

    form input{
        /* border: 1px solid #ccc; */
        border: 0;
        font: var(--baseFont);
        outline: 0;
        flex: 1;
    }
    
    .container-input{
        border-radius: .5rem;
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        gap: .3rem;
        padding: .4rem 1rem .4rem .5rem;

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

    .container-input label{
        display: flex;
    }


`

function FormularioPago() {
    const {selectedNumbers} = useContext(GlobalData)
    return (
        <FormularioPagoStyled>
          
            <h2>  {selectedNumbers.length === 1 ? 'Numero Seleccionado:' : 'Numeros Seleccionados:'}</h2>
            <p> {selectedNumbers.join(', ')}</p>
           
            <form action="">
                <div className='container-input'>
                    <label htmlFor="nombre" >
                        <Icon nombre="icon-user" color={"#ccc"} size={22} />
                    </label>
                     <input type="text" name="" id="nombre" placeholder='Nombre completo' required />
                </div>
                <div className='container-input'>
                    <label htmlFor="phone" >
                        <Icon nombre="icon-phone" color={"#ccc"} size={22} />
                    </label>
                     <input type="number" name="" id="phone" placeholder='Número de celular' required />
                </div>
                <div className='container-input'>
                    <label htmlFor="email" >
                        <Icon nombre="icon-mail" color={"#ccc"} size={22} />
                    </label>
                     <input type="email" name="" id="email" placeholder='Correo electrónico' required />
                </div>
               
                <input type="submit" value="Enviar" />
            </form>
          
        </FormularioPagoStyled>
    )
}

export default FormularioPago

