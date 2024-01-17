function TemplatesModal({template='default'}) {
    switch (template) {
        case 'default' :
            return(
                <h1> Soy default</h1>
            )
        case 'form' :
            return (
                <form action="">
                    <input type="text" />
                </form>
            )
    }
}

export default TemplatesModal
