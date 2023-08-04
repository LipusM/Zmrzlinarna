const c = console.log.bind(document)

import "./style.scss"

export const QuestionsAnswers = (props) => {

    const {question, answer} = props

    const element = document.createElement("section")
    element.classList.add("qa2")

    const questions = [question]
    c(questions)
    c(question.length)

    if(question && answer){

        element.innerHTML += `
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#qa2" aria-expanded="true" aria-controls="collapseOne">
                    ${question}
                    </button>
                </h2>
                <div id="qa2" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    ${answer}
                    </div>
                </div>
            </div>
        </div>
        `
    }

/*     element.innerHTML += `
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#qa2${qaNumber}" aria-expanded="true" aria-controls="collapseOne">
                ${question}
                </button>
            </h2>
            <div id="qa2${qaNumber}" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                ${answer}
                </div>
            </div>
        </div>
    </div>
    ` */

    return element
}