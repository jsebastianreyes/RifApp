export function compareArrays(numbersSold, selectedNumbers){
    let value = true
    for (let i = 0; i <= numbersSold.length -1; i++) {
          const validate = numbersSold.filter(number => number == selectedNumbers[i])
          if(validate.length > 1) {
            value = false
            break  
          }
      }

      return !value ? false : true   
}


