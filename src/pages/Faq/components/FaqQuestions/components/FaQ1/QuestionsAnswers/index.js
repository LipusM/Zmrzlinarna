const c = console.log.bind(document)

import "./style.scss"

export const QuestionsAnswers = (props) => {

    const {question, answer} = props

    const element = document.createElement("section")
    element.classList.add("qa2")

    element.innerHTML += `
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                ${question}
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                ${answer}
                </div>
            </div>
        </div>
    </div>
    `

    return element
}