import { useState, createContext, useRef, useEffect } from "react";
import { setNumbers } from "../firebase/config";


export const GlobalData = createContext()

export function ProviderGlobalData({children}){



    const [modalConfig, setModalConfig] = useState({visibility: false, template: 'default'})
    const [selectedNumbers, setSelectedNumbers] = useState([])
    const uuid = useRef(self.crypto.randomUUID())
    const [reset, setReset] = useState(false)

   



    const addNumber = (numero) => {

        setSelectedNumbers(prevState => {
            const copyArray = [...prevState]
            const res = copyArray.findIndex(num => num === numero)
            if(res < 0) copyArray.push(numero)
            setNumbers({
              uuid: uuid.current, 
              numbers: copyArray
            })
            return copyArray
          })
          setReset(false)
    }

    const deleteNumber = (number) => {
        setSelectedNumbers(prevState => {
        const copyArray = [...prevState]
        const filter = copyArray.filter(elem => elem !== number)
        setNumbers({
            uuid: uuid.current, 
            numbers: filter
          })
        return filter
      })
      setReset(false)

    }

    const clean = ()=>{
        setSelectedNumbers([])
        setReset(true)
        uuid.current = self.crypto.randomUUID()
        

    }

    return(
        <GlobalData.Provider value={{modalConfig, setModalConfig, selectedNumbers, addNumber, uuid, deleteNumber, clean, reset}}>
            {children}
        </GlobalData.Provider>
    )
}