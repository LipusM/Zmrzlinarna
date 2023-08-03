const c = console.log.bind(document)

import "./style.scss"

export const Header = () => {

    const element = document.createElement("section")
    element.innerHTML = `
    <h1>Naše zmrzlina</h1>
    `

    return element
}