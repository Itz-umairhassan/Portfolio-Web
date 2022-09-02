let name_regex = /[a-zA-Z]{3,}$/
let name_value = document.getElementById('name')
let message_value = document.getElementById('message')

document.getElementById('submit-button').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(name_regex.test(name_value.value) && message_value.value.length > 10)
    if (name_regex.test(name_value.value) && message_value.value.length > 10) {
        document.getElementById('my-form').submit()
    }
})
