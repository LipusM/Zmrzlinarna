const c = console.log.bind(document)

import "./style.scss"

import { FaQ1 } from "./components/FaQ1"
import { FaQ2 } from "./components/FaQ2"

export const FaqQuestions = () => {

/*     const sections1 = [{
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
    ] */


/*     const sections2 = [{
        question: "Jaká je platnost dárkového poukazu?",
        answer: "Platnost dárkového poukazu je jeden rok.",
    },
    {
        question: "Kde mohu Váš dárkový poukaz uplatnit?",
        answer: "Dárkové poukazy můžete uplatnit ve všech našich provozovnách.",
    },
    ] */

    const element = document.createElement("section")
    element.setAttribute("id", "faqSection")

/*     element.append(
        ...sections1.map(section =>
            FaQ1({
                question: section.question,
                answer: section.answer,
            })
        ),
        ...sections2.map(section =>
            FaQ2({
                question: section.question,
                answer: section.answer,
            })
        ),
    ) */

    element.append(FaQ1(), FaQ2())

    return element
}