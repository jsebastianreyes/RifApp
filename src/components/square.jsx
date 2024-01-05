import styled from 'styled-components'

const SquareStyled = styled.div`
  font: var(--fontSquare);
  aspect-ratio: 1/1;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);

  color: white;
  text-shadow: 0px 0px 3px #000;
  letter-spacing: .5px;
  box-shadow: 0px 0px 3px #000;
  cursor: pointer;
  transition: .3s;
  user-select: none;


  &:active{
    transform: scale(.9);
  }

`

function Square({number}) {
    return (
        <SquareStyled>
            {number}
        </SquareStyled>
    )
}

export default Square
