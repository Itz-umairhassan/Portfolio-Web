let links = document.querySelectorAll('#social-media-link ul li a')

let colors = ["#4267B2", "#F56040", "#0E3386"]

links.forEach(elem => {
    elem.addEventListener('mouseenter', (e) => {
        let idx = e.target.attributes.value.nodeValue;
        let element = e.target
        element.style.backgroundColor = colors[idx - 1]
    })

    elem.addEventListener('mouseleave', e => {
        e.target.style.backgroundColor = "transparent"

    })
})
