const c = console.log.bind(document)

import "./style.scss"

import { FaqBanner} from "./components/FaqBanner"
import { FaqQuestions} from "./components/FaqQuestions"

export const Faq = () => {

            const sections1 = [
                {
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


            const sections2 = [
                {
                    question: "Jaká je platnost dárkového poukazu?",
                    answer: "Platnost dárkového poukazu je jeden rok.",
                },
                {
                    question: "Kde mohu Váš dárkový poukaz uplatnit?",
                    answer: "Dárkové poukazy můžete uplatnit ve všech našich provozovnách.",
                },
            ]
    

    const element = document.createElement("main")

element.append(
    FaqBanner(),
    sections1.map(section => (
        FaqQuestions({
            question1: section.question,
            answer1: section.answer,
        })
    )),
    sections2.map(section => (
        FaqQuestions({
            question2: section.question,
            answer2: section.answer,
        })
    )),
)

    return element
}