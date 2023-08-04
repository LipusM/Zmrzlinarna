const c = console.log.bind(document)

import "./style.scss"

import { FaQ1 } from "./components/FaQ1"
import { FaQ2 } from "./components/FaQ2"

export const FaqQuestions = () => {

    const element = document.createElement("section")
    element.setAttribute("id", "faqSection")

    element.append(FaQ1(), FaQ2())

    return element
}