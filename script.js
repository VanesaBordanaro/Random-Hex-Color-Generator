const body = document.querySelector('body')
const button = document.querySelector('#change-color-btn')
const hexValue = document.querySelector('#hex-number')

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

button.addEventListener('click', function() {
    let hexNumbers = '#'
    for(let i = 0; i < 6; i++ ) {
        let randomHex = Math.floor(Math.random() * hex.length)
        hexNumbers += hex[randomHex]
    }
    body.style.backgroundColor = hexNumbers
    hexValue.innerHTML = hexNumbers
})