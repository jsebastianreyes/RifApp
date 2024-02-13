import { useState, createContext, useRef } from "react";
import { getNumbers } from "../firebase/config";

export const GlobalData = createContext()

export function ProviderGlobalData({children}){

    const [modalConfig, setModalConfig] = useState({visibility: false, template: 'default'})
    const [selectedNumbers, setSelectedNumbers] = useState([])
    const uuid = useRef(self.crypto.randomUUID())

    const addNumber = (numero) => {
        setSelectedNumbers(prevState => {
            const copyArray = [...prevState]
            const res = copyArray.findIndex(num => num === numero)
            if(res < 0) copyArray.push(numero)
            getNumbers(copyArray, uuid.current)
            return copyArray
          })
    }

    const deleteNumber = (number) => {
        setSelectedNumbers(prevState => {
        const copyArray = [...prevState]
        const filter = copyArray.filter(elem => elem !== number)
        getNumbers(filter, uuid.current)
        return filter
      })
    }

    return(
        <GlobalData.Provider value={{modalConfig, setModalConfig, selectedNumbers, addNumber, uuid, deleteNumber}}>
            {children}
        </GlobalData.Provider>
    )
}