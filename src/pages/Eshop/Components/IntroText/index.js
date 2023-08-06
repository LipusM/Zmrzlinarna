const c = console.log.bind(document)

import "./style.scss"

export const IntroText = () => {

    const element = document.createElement("section")
    element.setAttribute("id","introText")

    return element
}