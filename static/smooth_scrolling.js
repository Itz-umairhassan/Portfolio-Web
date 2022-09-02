let cursor = document.querySelector('#above-scroller i')
let first = true;

document.querySelectorAll('a[href^="#"]').forEach(elem => {
    elem.addEventListener('click', e => {
        e.preventDefault();
        let hr = e.target.parentElement.getAttribute("href")
        document.querySelector(hr).scrollIntoView({
            behavior: "smooth"
        })
        if (first) {
            cursor.style.transform = "rotate(360deg)";
            first = false;
        }
    })
})




document.querySelector('#above-scroller').addEventListener('click', e => {
    // we are at home section so go to about section...
    if (first) {
        document.querySelector('#about-section').scrollIntoView({
            behavior: "smooth"
        })
        cursor.style.transform = "rotate(360deg)";
        first = false;
    }
    else {
        document.querySelector("#home-section").scrollIntoView({
            behavior: "smooth"
        })
        cursor.style.transform = "rotate(180deg)";
        first = true
    }
})

window.addEventListener('scroll', () => {
    console.log(scrollY)
    if (scrollY < 670) {
        cursor.style.transform = 'rotate(180deg)'
        first = true
    }
    else if (scrollY > 670) {
        cursor.style.transform = 'rotate(360deg)'
        first = false
    }
})
