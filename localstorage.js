function saveToLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value))
    return "Data was saved with the key " + key
}


function readFromLocalStorage(key){
    let value = JSON.parse(localStorage.getItem(key))
    console.log(value);
    
}



let success = saveToLocalStorage("favorites", [1,5,8])
console.log(success);

readFromLocalStorage("hest")
