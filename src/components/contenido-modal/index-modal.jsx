import FormularioPago from "./formulario-pago"
import InfoPremio from "./info-premio"
import Instrucciones from "./instrucciones"
import Error from "./error"
import { useContext } from "react"
import { GlobalData } from "../../context/variables-globales"



function IndexModal() {
    const {modalConfig} = useContext(GlobalData)
    const {visibility, template} = modalConfig

    switch (template) {
        case 'premio' :
            return(
                <InfoPremio/>
            )
            case 'instrucciones' :
                return(
                    <Instrucciones/>
                )
                case 'error' :
                return(
                    <Error/>
                )
        case 'form' :
            return (
               <FormularioPago/>
            )
    }
}

export default IndexModal
