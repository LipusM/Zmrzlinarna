const c = console.log.bind(document)

import "./style.scss"

export const GelatoHeader = () => {

    const element = document.createElement("section")
    element.setAttribute("id","gelatoHeader")

    element.innerHTML = `
    <h2>Gelato!</h2>
    `
    return element
}