

    fetch("/data/destinations.json")
    .then(response => response.json())
    .then(data => {
        let sectionElm = document.createElement("section")
        sectionElm.classList.add("columns")
        sectionElm.innerHTML = data.destinations.map(destination => `
            <img src="/img/${destination.image}"></img>
            <a href="destination.html?id=${destination.id}">
            MORE
            </a>` ).join("")
    document.querySelector("#root").append(sectionElm)
    })