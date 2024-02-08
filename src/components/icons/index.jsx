import IconMail from "./icon-mail"
import IconUser from "./icon-user"
import IconSearch from "./icon-search"
import IconPhone from "./icon-phone"

function Index({nombre, ...props}) {
    // console.log(props)
    switch(nombre){
        case 'icon-mail': {
            return <IconMail {...props}/>
        }
        case 'icon-user': {
           return <IconUser {...props} />
        }
        case 'icon-search':{
            return <IconSearch {...props} />
        }
        case 'icon-phone':{
            return <IconPhone {...props} />
        }
        

    }
}

export default Index
