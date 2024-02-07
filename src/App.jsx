import Board from "./components/board"
import Header from "./components/header"
import Footer from "./components/footer"
import Modal from "./components/modal"
import { useState } from "react"
import Icon from "./components/icons"
import { ButtonRounded } from "./components/button"

function App() {

  const [modalConfig, setModalConfig] = useState({visibility: false, template: 'default'})

  // const handleActivemodal = ()=> {
  //   setModalConfig(prev => {
  //     return {visibility: true}

  //   })
  // }

  return (
    <>  

      <Header/>
      <Board modalConfig={modalConfig} setModalConfig={setModalConfig}/>
      <Footer/>  
      <Modal modalConfig={modalConfig} setModalConfig={setModalConfig}/>
    
      <ButtonRounded icon={<Icon nombre="icon-mail" size={22} color={'red'} />} />

      
      
    </>
  )
}

export default App
