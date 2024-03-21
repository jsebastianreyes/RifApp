import styled from 'styled-components'
import { useState } from 'react'
import { useContext } from 'react'
import { GlobalData } from '../context/variables-globales'
import { useGetNumbersSold } from '../hooks/useGetNumbersSold'


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
    background-color: #FBAB7E;
    background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
  }

  &.blocked{
    background-color: #FFE53B;
    background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);
    pointer-events: none;
    opacity: .9;

  }


  &.test{
    background-color: #26c64e;
    background-image: linear-gradient(147deg, #a8144f 0%, #FF2525 74%);
    pointer-events: none;
    opacity: .9;

  }

`

function Square({number, uuid}) {
    const [active, setActive] = useState(false)
    const [numberStatus, setNumberStatus] = useState('available')
    const {addNumber, deleteNumber, cleanBoard,  selectedNumbers, reset} = useContext(GlobalData)
    const { numbersSold } = useGetNumbersSold()
    
   
    const handleActive = (e) => {
      setActive(true)
      setNumberStatus('pending')
      addNumber(number)
    }

    const handleDoubleClick = () => {
      setNumberStatus('available')
      setActive(false)
      deleteNumber(number)
    }

    console.log(numbersSold)
//    const isAvailable = ()=> {  
//     return numbersSold.some(item => {
//        return item.numeros.some(numero => numero === number)
//     })
//  }

 const isAvailable = ()=> {  
  return numbersSold.some(item => item === number)
}


 numberStatus === 'pending' && reset ? setNumberStatus('sold') : ''


   const clasName = ()=> {
     if(isAvailable() && numberStatus !== 'pending' )  return 'blocked'  
     else if(numberStatus === 'pending') return 'active'
   }
   return (
        <SquareStyled onClick={handleActive} className={clasName()}
        onDoubleClick={handleDoubleClick} title={isAvailable() & !active ? 'Vendido' : null}>
            {number}
        </SquareStyled>
    )
}

export default Square
