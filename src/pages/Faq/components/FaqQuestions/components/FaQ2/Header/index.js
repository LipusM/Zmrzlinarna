const c = console.log.bind(document)

import "./style.scss"

export const Header = () => {

    const element = document.createElement("section")
    element.setAttribute("id","header2")

    element.innerHTML = `
    <h2>Dárkové poukazy</h2>
    `

    return element
}