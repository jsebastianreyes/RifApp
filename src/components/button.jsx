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


//   box-shadow: 1px 1px 8px #000;
`

function Button({ text, link, className, icon, onClick }) {
  const component = link ? 'a' : 'button'
  let IconComponent = null
  if (icon) {
    if (isValidElement(icon)) {
      IconComponent = icon
    }
  }
  return (
    <ButtonStyled as={component} href={link} className={className} onClick={onClick}>
      {IconComponent}
      {text}
    </ButtonStyled>
  )
}

export const ButtonContrast = styled(Button)`
  background: var(--white);
  color: var(--buttonBG);
  &:hover {
    background: var(--buttonBG);
    color:  var(--white) ;
  }

 
`
export const ButtonRounded = styled(Button)`
   min-inline-size: 3.5rem;
   border-radius: 50%;
   padding: .75rem;
   aspect-ratio: 1/1;
  
`

export default Button