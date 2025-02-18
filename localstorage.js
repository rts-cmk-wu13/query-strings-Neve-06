function saveToLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value))
    return "Data was saved with the key " + key
}


function readFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key))
    
}

function deleteFromLocalStorage(key){
    localStorage.removeItem(key)
    return "The element with key " + key + " was deleted";
}
