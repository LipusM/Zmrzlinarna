const c = console.log.bind(document)

import "./style.scss"

export const Gelato = (props) => {

    const {img, text} = props

    const element = document.createElement("section")
    element.setAttribute("id","gelato")

    element.innerHTML = `
    <div>
        <div> <img src="${img}" alt="Gelato!"> </div>
        <div>${text}</div>
        <div><button type="button" class="btn btn-primary">Objednat</button></div>
    </div>
    `

    return element
}