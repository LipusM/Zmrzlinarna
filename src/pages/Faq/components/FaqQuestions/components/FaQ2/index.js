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
        id: 1,
    },
    {
        question: "Kde mohu Váš dárkový poukaz uplatnit?",
        answer: "Dárkové poukazy můžete uplatnit ve všech našich provozovnách.",
        id: 2,
    },
    ] 
 
    element.append(
        Header(),
        ...section.map(section =>
            QuestionsAnswers({
                question: section.question,
                answer: section.answer,
                id: section.id,
            })
        ),
    )

    return element
}