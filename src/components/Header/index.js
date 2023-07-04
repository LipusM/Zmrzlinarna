const c = console.log.bind(document)

import './style.scss'

export const Header = () => {

    const element = document.createElement("header")

    element.innerHTML = `
    <nav>
        <a href="/">Úvod</a>
        <a href="/eshop">E-shop</a>
        <a href="/prace">Práce</a>
        <a href="/kontakty">Kontakty</a>
    </nav>
    `

    const links = element.querySelector("nav")

    links.addEventListener("click", (event) => {
        c(event.target)
        c("ahoj")
    })

    return element
}














