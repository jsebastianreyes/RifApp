import Board from "./components/board"
import Header from "./components/header"
import Footer from "./components/footer"
import Modal from "./components/modal"
import { useState } from "react"

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

    
      
      
    </>
  )
}

export default App
