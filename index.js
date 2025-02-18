

    fetch("/data/destinations.json")
    .then(response => response.json())
    .then(data => {
        let sectionElm = document.createElement("section")
        sectionElm.classList.add("columns")
        sectionElm.innerHTML = data.destinations.map(destination => `
            <figure>
            <img src="/img/${destination.image}"></img>
            <button>heart</button>
            <a href="destination.html?id=${destination.id}">
            MORE
            </a>
            </figure>` ).join("")
    document.querySelector("#root").append(sectionElm)
    })