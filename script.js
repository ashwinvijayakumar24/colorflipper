const button = document.querySelector('button')
const hexParagraph = document.querySelector('p')
let hextext = ""

const characters = 'ABCDEF0123456789'


button.addEventListener('click', () => {
    for(let i = 0; i < 6; i++) {
        hextext += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    hexParagraph.innerHTML = `#${hextext}`
    document.body.style.backgroundColor = `#${hextext}`
    hextext = ''

})
