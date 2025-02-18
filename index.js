

    fetch("/data/destinations.json")
    .then(response => response.json())
    .then(data => {
        let sectionElm = document.createElement("section")
        sectionElm.classList.add("columns")
        sectionElm.innerHTML = data.destinations.map(destination => `
            <figure class="cardimg__container">
            <img src="/img/${destination.image}"></img>
            <button class="card__favoritebtn" data-favid="${destination.id}">heart</button>
            <a href="destination.html?id=${destination.id}">
            MORE
            </a>
            </figure>` )
            .join("")

            sectionElm.querySelectorAll(".card__favoritebtn").forEach(function(button){
                button.addEventListener("click", function(event){
                    console.log(event.target);
                    
            })
        
            })
    document.querySelector("#root").append(sectionElm)
    })