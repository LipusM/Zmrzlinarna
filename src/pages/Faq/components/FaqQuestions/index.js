const c = console.log.bind(document)

import "./style.scss"

export const FaqQuestions = (props) => {

    /* const {question1, answer1, question2, answer2} = props */
  /*   c(question1) */
/*     c(answer2)
    c(question2)
    c(answer2) */
    const {allQA1, allQA2} = props

    const element = document.createElement("section")
    element.setAttribute("id","faqSection")

    element.innerHTML = `
    <section>
        <h2>První část</h2>

        <div>
        ${allQA1.map(eachQA1 => 
            `${eachQA1.question}, <br> ${eachQA1.answer} <br><br>` 
            )} 
        </div> 
    </section>

    <section>
    <h2>Druhá část</h2>

    <div>
        ${allQA2.map(eachQA2 => 
            `${eachQA2.question}, <br> ${eachQA2.answer} <br><br>` 
            )} 
        </div> 
    </section>
    `

/*      element.innerHTML += `
    <section>
        <h2>První část</h2>
        <div>
            <div>${question1}</div> 
            <div>${answer1}</div>
        </div>
    </section>

    <sectionction>
        <h2>Druhá část</h2>
        <div>
            <div>${question2}</div>
            <div>${answer2}</div>
    </div>
    </sectionction>
    ` */

    return element
}