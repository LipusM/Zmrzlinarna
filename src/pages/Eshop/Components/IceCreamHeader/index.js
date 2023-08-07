const c = console.log.bind(document)

import "./style.scss"

export const IceCreamHeader = () => {

    const element = document.createElement("section")
    element.setAttribute("id","iceCreamHeader")

    element.innerHTML = `
    <h2>Zmrzlina!</h2>
    `
    return element
}