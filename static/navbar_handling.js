
let burger_menu = document.querySelector("#links_list > i")
let cross_menu = document.querySelector("#links_list ul i")
let menu = document.getElementsByClassName("list-item");
let title = document.getElementById('title');

let show_menu = () => {

    for (let val of menu) {
        val.style.display = 'block'
    }
    cross_menu.style.display = 'block'
    burger_menu.style.display = 'none'
    title.style.display = 'none'
}

let hide_menu = () => {
    for (let val of menu) {
        val.style.display = 'none'
    }
    cross_menu.style.display = 'none'
    burger_menu.style.display = 'block'
    title.style.display = 'block'
}
