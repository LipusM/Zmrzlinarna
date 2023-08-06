const c = console.log.bind(document)

import "./style.scss"

export const IceCream = (props) => {

    const {img, text} = props

    const element = document.createElement("section")
    element.setAttribute("id","iceCream")

    return element
}