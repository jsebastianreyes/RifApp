import styled from 'styled-components'
import Overlay from "./overlay"
import { createPortal } from 'react-dom';
import IndexModal from './contenido-modal/index-modal.jsx';

const ModalStyled = styled.div`
    background: white;
    color: #4d4d4d;
    padding: 1.5rem;
    border-radius: 1rem;
    position: fixed;
    inset-block-start: 50%;
    transform: translateY(-50%) translateX(-50%);
    inset-inline-start: 50%;
    max-inline-size: 16rem;
    inline-size: 100%;
    min-block-size: 16rem;
    box-shadow: 1px 1px 5px #000;
    border: 1px solid #4d4d4d;
    font: var(--baseFont);

    @media screen and (min-width: 768px) {
      &{
        max-inline-size: 25rem;
      }  
     }
    
   
`

function Modal({modalConfig, setModalConfig}) {
    const {visibility, template} = modalConfig

    const handleCloseModal = ()=> {
        setModalConfig(prev => {
             return {
                ...prev, 
                visibility: false
            } 
        }) 
    }
    if(visibility){
        return (
           <>
             {createPortal(
                  <Overlay>
                    <ModalStyled>
                        <IndexModal template={template}/>
                        <button onClick={handleCloseModal}>
                            Close
                        </button>
                    </ModalStyled>
                  </Overlay>
                  ,
                  document.body
              )}
           </>
        )
    }
    }

export default Modal