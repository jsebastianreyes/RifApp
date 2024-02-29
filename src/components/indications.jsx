import styled from 'styled-components'

const IndicationsStyled = styled.div`

    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 1rem 0;

    .container-colors{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .bg{
        inline-size: 1.4rem;
        aspect-ratio: 1/1;
        border: 1px solid white;
        border-radius: 50%;
    }

    .bg.bg-disponible{
        background-color: #8EC5FC;
        background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
    }

    .bg.bg-editable{
        background-color: #FBAB7E;
        background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
    }

    .bg.bg-reservado{
        background-color: #26c64e;
        background-image: linear-gradient(147deg, #a8144f 0%, #FF2525 74%);
    }

    .title{
        font-size: .8rem;
    }

`

function Indications() {
    return (
        <IndicationsStyled>
            <div className='container-colors'>
                <span className='bg bg-disponible'></span>
                <span className='title'>N. Disponible</span>
            </div>
            <div className='container-colors'>
                 <span className='bg bg-editable'></span>
                <span className='title'>N. Editable</span>
            </div>
            <div className='container-colors'>
                <span className='bg bg-reservado'></span>
                <span className='title'>N. Reservado</span>
            </div>
        </IndicationsStyled>
    )
}

export default Indications
