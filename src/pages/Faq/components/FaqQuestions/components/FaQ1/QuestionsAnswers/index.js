const c = console.log.bind(document)

import "./style.scss"

export const QuestionsAnswers = (props) => {

    const {question, answer, id} = props

    const element = document.createElement("section")
    element.classList.add("qa1")

    element.innerHTML += `
    <div class="accordion">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" style="background-color: #f6f6f6; color: #525252; box-shadow: none;" data-bs-toggle="collapse" data-bs-target="#qa1${id}" aria-expanded="true" aria-controls="collapseOne">
                ${question}
                </button>
            </h2>
            <div id="qa1${id}" class="accordion-collapse collapse hide" aria-labelledby="headingOne">
                <div class="accordion-body">
                ${answer}
                </div>
            </div>
        </div>
    </div>
    `

    return element
}