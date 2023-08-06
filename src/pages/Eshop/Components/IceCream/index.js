const c = console.log.bind(document)

import "./style.scss"

export const IceCream = () => {

    const element = document.createElement("section")
    element.setAttribute("id","iceCream")

    return element
}