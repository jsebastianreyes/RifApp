import FormularioPago from "./formulario-pago"
import InfoPremio from "./info-premio"
import Instrucciones from "./instrucciones"

function IndexModal({template='default'}) {
    switch (template) {
        case 'premio' :
            return(
                <InfoPremio/>
            )
            case 'instrucciones' :
                return(
                    <Instrucciones/>
                )
        case 'form' :
            return (
               <FormularioPago/>
            )
    }
}

export default IndexModal
