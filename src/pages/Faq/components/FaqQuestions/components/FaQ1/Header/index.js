const c = console.log.bind(document)

import "./style.scss"

export const Header = () => {

    const element = document.createElement("section")
    element.setAttribute("id","header1")

    element.innerHTML = `
    <h1>Naše zmrzlina</h1>
    `

    return element
}