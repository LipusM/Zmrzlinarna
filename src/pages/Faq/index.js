const c = console.log.bind(document)

import "./style.scss"

import { FaqBanner } from "./components/FaqBanner"
import { FaqQuestions } from "./components/FaqQuestions"

export const Faq = () => {

    const element = document.createElement("main")

    element.append(FaqBanner(), FaqQuestions())

    return element
}