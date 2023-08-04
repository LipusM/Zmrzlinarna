const c = console.log.bind(document)

import "./style.scss"

import { Header } from "./Header"
import { QuestionsAnswers } from "./QuestionsAnswers"

export const FaQ1 = () => {

    const element = document.createElement("section")
    element.setAttribute("id", "faq1")

    const section = [{
        question: "Je možné uspořádat oslavu ve Vaší zmrzlinárně?",
        answer: "Ano, večírek, meeting, workshop či oslavu je možné uspořádat ve všech našich provozovnách. Kontaktujte nás a my to rádi pro vás zajistíme.",
    },
    {
        question: "Je možné u Vás objednat narozeninový dort?",
        answer: "Speciální narozeninové dorty s popisem na přání zatím nevyrábíme, je možné si u nás zakoupit celý dort z nabídky našich dortů. Je ale třeba objednávka alespoň 3 dny předem.",
    },
    {
        question: "Jaký je cenový rozdíl mezi veganskými, zdravými a klasickými zmrzlinami?",
        answer: "Všechny druhy zmrzliny včetně zdravých a veganských prodáváme maloobchodně vždy za stejnou cenu jen dle velikosti porce. Tak to bylo, je a tak to zůstane.",
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