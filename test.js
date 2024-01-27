let all = [ {id:1}, {id:2}, {id:3}, {id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},];

let favorites = [{id:1,txt:'que'},{id:2,txt:'que'},{id:3}];

///////////////////////////////////////////////////////
const filteredItems= all.map((value)=>{
    const finded=favorites.find(favorite => favorite.id == value.id)
    if(finded==undefined){
        return value
    }else{
        return finded
    }
})

console.log(filteredItems);  
