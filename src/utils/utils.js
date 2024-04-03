export function compareArrays(numbersSold, selectedNumbers){
    let value 
    selectedNumbers.forEach(num => {
        const verif = numbersSold.filter(number => number === num )
        if(verif.length > 1) value = true
        else value = false
     }); 

     return value ? true : false

    
}


