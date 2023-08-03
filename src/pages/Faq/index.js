const c = console.log.bind(document)

import "./style.scss"

import { FaqBanner } from "./components/FaqBanner"
import { FaqQuestions } from "./components/FaqQuestions"

export const Faq = () => {

    const element = document.createElement("main")
/*     const qA2 = sections2.map(section =>
        ({
            question2: section.question,
            answer2: section.answer,
        })
    ) */

    element.append(
        FaqBanner(),
        FaqQuestions(),
    )

    return element
}