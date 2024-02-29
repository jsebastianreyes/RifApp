import Board from "./components/board"
import Header from "./components/header"
import Footer from "./components/footer"
import Modal from "./components/modal"
import Wrapper from "./components/wrapper"
import Indications from "./components/indications"


function App() {


  
  return (
    <Wrapper>    
      <Header/>
      <Indications/>
      <Board />
      <Footer/>  
      <Modal />
    </Wrapper>
  )
}

export default App
