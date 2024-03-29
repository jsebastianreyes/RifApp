import styled from 'styled-components'
import Overlay from "./overlay"
import { createPortal } from 'react-dom';
import { useContext } from 'react';
import IndexModal from './contenido-modal/index-modal.jsx';
import { GlobalData } from '../context/variables-globales.jsx';



const ModalStyled  = styled.div`
    background: white;
    color: #4d4d4d;
    padding: 1.5rem;
    border-radius: 1rem;
    position: fixed;
    inset-block-start: 50%;
    transform: translateY(-50%) translateX(-50%);
    inset-inline-start: 50%;
    max-inline-size: 19rem;
    inline-size: 100%;
    min-block-size: 16rem;
    box-shadow: 1px 1px 5px #000;
    border: 1px solid #4d4d4d;
    font: var(--baseFont);
    position: relative;


    @media screen and (min-width: 768px) {
      &{
        max-inline-size: ${ props => {
         switch( props.template ){
             case 'form':
                 return '23rem';
             default:
                 return '32rem';
         }
     }}; 
      }  
     }

     &.test{
        max-inline-size: 24rem;
     }

     .close{
        position: absolute;
        background: transparent;
        border: 0;
        inset-block-start: .4rem;
        inset-inline-end: .4rem;
        cursor: pointer;
     }
    
   
`

function Modal() {

    
    const {modalConfig, setModalConfig} = useContext(GlobalData)
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
                    <ModalStyled  template={template}>
                        <IndexModal/>
                        <button title="Cerrar Modal" className="close" onClick={handleCloseModal}>
                            ❌
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
