const c = console.log.bind(document)

import "./style.scss"

export const Gelato = (props) => {

    const {img, text} = props

    const element = document.createElement("section")
    element.setAttribute("id","gelato")

    return element
}