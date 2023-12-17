// let textoCompleto='newsearch=vasoorderby=low-price'
// let indexOrder = textoCompleto.indexOf('orderby=')//
// let index = textoCompleto.indexOf('search=') + 7
// let toSearch = textoCompleto.substring(index,indexOrder)
// let toOrder= textoCompleto.substring(indexOrder+8)
// console.log({indexOrder,index,toSearch,toOrder})


let textoCompleto='newsearch=vasoorderby=lower'
let toOrder;
let toSearch;
const indexOrder = textoCompleto.indexOf('orderby=')//
const indexSearch = textoCompleto.indexOf('search=') 
if(indexOrder!==-1 && indexSearch!==-1){
  console.log('1')
  toSearch = textoCompleto.substring(indexSearch+7,indexOrder)//extraemos lo que dice luego de search= y antes de orderby=
  toOrder= textoCompleto.substring(indexOrder+8)//extraemos lo que dice luego de orderby
  
}else if(indexOrder!==-1){
  toSearch = textoCompleto.substring(indexSearch+7,indexOrder)//extraemos lo que dice luego de search= y antes de orderby=
}
else if(indexSearch!==-1){
  toSearch = textoCompleto.substring(indexSearch+ 7)
  toOrder= textoCompleto.substring(indexOrder+8)
}

console.log({indexOrder,indexSearch,toSearch,toOrder})

