import styled from 'styled-components'

const PreloadStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
  gap: 1rem;
  margin-block: 1rem;

  span{
    background-color: #f6f6f6;
    block-size: 3rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
   
  }

  span:nth-child(odd){
    animation-name: animate;
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }

  span:nth-child(even){
    animation-name: animate;
    animation-iteration-count: infinite;
    animation-duration: 2s;
  }

  @keyframes animate {
  0%   {opacity: .8;}
  100% {opacity:1;}
}
`

function Preload() {
    const square = Array(100).fill()

    return (
        <PreloadStyled>
            {square.map((el,index) => {
                return (<span  key={`item-${index}`}>  </span>)
            })}
        </PreloadStyled>
    )
}

export default Preload
