function saveToLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value))
    return "Data was saved with the key " + key
}


function readFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key))
    
}

function deleteFromLocalStorage(key){
    let value = localStorage.removeItem(key)
    console.log(value);
    
}



let success = saveToLocalStorage("favorites", [1,5,8])
console.log(success);

let myFavorites = readFromLocalStorage("favorites")
console.log(myFavorites);


deleteFromLocalStorage("tomat")