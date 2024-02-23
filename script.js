const observer = new IntersectionObserver(entrees => {
    entrees.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.add("hidden-elem")
        }
        else {
            entry.target.classList.remove("hidden-elem")
        }

        if (entry.target.classList.contains("user")) {
            if (entry.isIntersecting) {
                entry.target.classList.add("user-animated")
            }
            else {
                entry.target.classList.remove("user-animated")
            }
        }
    })
})

const hiddenElems = document.querySelectorAll(".hidden")
hiddenElems.forEach(el => observer.observe(el))