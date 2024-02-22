const observer = new IntersectionObserver(entrees => {
    entrees.forEach(entry => {
        if (!entry.isIntersecting)
            entry.target.classList.add("hidden-elem")
        else
            entry.target.classList.remove("hidden-elem")
    })
})

const hiddenElems = document.querySelectorAll(".hidden")
hiddenElems.forEach(el => observer.observe(el))