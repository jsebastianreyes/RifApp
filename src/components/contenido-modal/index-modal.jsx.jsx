import FormularioPago from "./formulario-pago"

function IndexModal({template='default'}) {
    switch (template) {
        case 'default' :
            return(
                <h1> Soy default</h1>
            )
        case 'form' :
            return (
               <FormularioPago/>
            )
    }
}

export default IndexModal
