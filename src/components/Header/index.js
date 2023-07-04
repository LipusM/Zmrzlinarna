const c = console.log.bind(document)

import './style.scss'

export const Header = () => {

    const element = document.createElement("header")

    element.innerHTML = `
    <nav>
        <a href="/html/">Úvod</a>
        <a href="/css/">E-shop</a>
        <a href="/js/">Práce</a>
        <a href="/python/">Kontakty</a>
    </nav>
    `

    return element
}














