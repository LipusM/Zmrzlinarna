const c = console.log.bind(document)

import "./style.scss"

import { FaqBanner } from "./components/FaqBanner"
import { FaqQuestions } from "./components/FaqQuestions"
import { Text } from "./components/Text"
import { Form } from "./components/Form"

export const Faq = () => {

    const element = document.createElement("main")

    element.append(
        FaqBanner(),
        FaqQuestions(),
        Text(),
        Form()
    )

    return element
}