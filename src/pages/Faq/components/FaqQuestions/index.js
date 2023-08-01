const c = console.log.bind(document)

import "./style.scss"

export const FaqQuestions = (props) => {

    const {question1, answer1, question2, answer2} = props
    c(question1)
/*     c(answer2)
    c(question2)
    c(answer2) */

    const element = document.createElement("section")
    element.setAttribute("id","faqSection")

    element.innerHTML += `
    <section>
        <h2>První část</h2>
        <div>
            <div>${question1}</div> <br>
            <div>${answer1}</div>
        </div>
    </section>

    <section>
        <h2>Druhá část</h2>
        <div>
            <div>${question2}</div>
            <div>${answer2}</div>
    </div>
    </section>
    `

    return element
}