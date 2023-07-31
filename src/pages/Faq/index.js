const c = console.log.bind(document)

import "./style.scss"

import {
    FaqBanner
} from "./components/FaqBanner"
import {
    FaqQuestions
} from "./components/FaqQuestions"

export const Faq = () => {

    const allAquestions = [

        {
            heading: "Naše zmrzlina",
            questionsAnswers: [
                {
                    question: "Je možné u Vás objednat narozeninový dort?",
                    answer: "Speciální narozeninové dorty s popisem na přání zatím nevyrábíme, je možné si u nás zakoupit celý dort z nabídky našich dortů. Je ale třeba objednávka alespoň 3 dny předem.",
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
        },

        {
            heading: "Dárkové poukazy",
            questionsAnswers: [
                {
                    question: "Jaká je platnost dárkového poukazu?",
                    answer: "Platnost dárkového poukazu je jeden rok.",
                },
                {
                    question: "Kde mohu Váš dárkový poukaz uplatnit?",
                    answer: "Dárkové poukazy můžete uplatnit ve všech našich provozovnách.",
                },
            ]
        },
    ]


    const sections = allAquestions.map(section => {
        /* c(section.heading) */
        c(section.heading)
        /* c(section.questionsAnswers) */

        const questionAnswer = section.questionsAnswers.map(questionAnswer => ({
            question: questionAnswer.question,
            answer: questionAnswer.answer
            })  
        )
        c(questionAnswer)
        

    })
    

    const element = document.createElement("main")

    element.append(FaqBanner(),
        FaqQuestions({

        }))

    return element
}