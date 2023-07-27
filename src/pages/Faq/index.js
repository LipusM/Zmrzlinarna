const c = console.log.bind(document)

import "./style.scss"

import { FaqBanner } from "./components/FaqBanner"

export const Faq = () => {

    const element = document.createElement("main")

    element.append(FaqBanner())

    return element
}