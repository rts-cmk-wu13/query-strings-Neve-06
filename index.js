let favorites = readFromLocalStorage("favorites") || []
console.log(favorites);

// !favorites && favorites = []


    fetch("/data/destinations.json")
    .then(response => response.json())
    .then(data => {
        let sectionElm = document.createElement("section")
        sectionElm.classList.add("columns")
        sectionElm.innerHTML = data.destinations.map(destination => `
            <figure class="card">
            <img src="/img/${destination.image}"></img>
            <button class="card__favoritebtn ${favorites.includes(destination.id.toString())?"card__favoritebtn--selected" : ""}" data-favid="${destination.id}">heart</button>
            <a href="destination.html?id=${destination.id}">
            MORE
            </a>
            </figure>` )
            .join("")

            sectionElm.querySelectorAll(".card__favoritebtn").forEach(function(button){
                button.addEventListener("click", function(event){
                    let currentId = event.target.dataset.favid;
                    if (favorites.includes(currentId)){
                        let newFavorites = favorites.filter(id => id != currentId)
                        favorites = newFavorites
                        event.target.classList.remove("card__favoritebtn--selected")
                        console.log(favorites);
                        
                    }else {
                        favorites.push(currentId)
                        event.target.classList.add("card__favoritebtn--selected")
                        console.log(favorites);
                        
                    }
                    saveToLocalStorage("favorites", favorites)
            })
        
            })
    document.querySelector("#root").append(sectionElm)
    })