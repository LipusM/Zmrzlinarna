const c = console.log.bind(document)

import "./style.scss"

import { Header } from "./Header"
import { QuestionsAnswers } from "./QuestionsAnswers"

export const FaQ2 = () => {

    const element = document.createElement("section")
    element.setAttribute("id", "faq2")

    const section = [{
        question: "Jaká je platnost dárkového poukazu?",
        answer: "Platnost dárkového poukazu je jeden rok.",
    },
    {
        question: "Kde mohu Váš dárkový poukaz uplatnit?",
        answer: "Dárkové poukazy můžete uplatnit ve všech našich provozovnách.",
    },
    ] 
 
    element.append(
        Header(),
        ...section.map(section =>
            QuestionsAnswers({
                question: section.question,
                answer: section.answer,
            })
        ),
    )

    return element
}