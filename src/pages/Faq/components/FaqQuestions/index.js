const c = console.log.bind(document)

import "./style.scss"

export const FaqQuestions = (props) => {

    const {section} = props
    c(section)

    const element = document.createElement("section")
    element.setAttribute("id","faqSection")

    element.innerHTML = `

    `

    return element
}