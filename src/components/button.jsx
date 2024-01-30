import { isValidElement } from 'react'

import styled from 'styled-components'

const ButtonStyled = styled.button`
  font: var(--basefont);
  font-weight: 800;
  font-size: 1.1rem;
  color: #fff;
  text-shadow: 1px 1px 1px #fff;
  letter-spacing: .5px;
  border-radius: 1rem;
  cursor: pointer;
  padding: .4rem 2rem;
  text-transform: uppercase;
  border: 0;
  background-color: #16A085;
/* background-image: linear-gradient(132deg, #F4D03F 0%, #16A085 100%); */


  box-shadow: 1px 1px 8px #000;



`

function Button({ text, link, className, onClick }) {
  const component = link ? 'a' : 'button'  
  return (
    <ButtonStyled onClick={onClick} as={component} href={link} className={className}>
      {text}
    </ButtonStyled>
  )
}


export const ButtonRounded = styled(Button)`
  min-inline-size: initial;
  border-radius: 50%;
  padding: 1rem;
  border: 2px solid red;
  aspect-ratio: 1/1;
`

export default Button