import styled from 'styled-components'
import { useState } from 'react'

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

  &.active{
    background-color: #FFE53B;
    background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);

  }

`

function Square({number, setSelectedNumbers}) {
    const [active, setActive] = useState(false)

    const handleActive = (e) => {
      setActive(true)
      setSelectedNumbers(prevState => {
        const copyArray = [...prevState]
        const res = copyArray.findIndex(num => num === number)
        if(res < 0) copyArray.push(number)
        return copyArray
      })
    }

    const handleDoubleClick = () => {
      setActive(false)
      setSelectedNumbers(prevState => {
        const copyArray = [...prevState]
        return copyArray.filter(elem => elem !== number)
      })
    }

    return (
        <SquareStyled onClick={handleActive} className={active ? 'active' : ''}
        onDoubleClick={handleDoubleClick} >
            {number}
        </SquareStyled>
    )
}

export default Square
