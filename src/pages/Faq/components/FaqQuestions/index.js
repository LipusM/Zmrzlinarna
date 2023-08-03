const c = console.log.bind(document)

import "./style.scss"

export const FaqQuestions = (props) => {

    const { question1, answer1, question2, answer2 } = props
/*     c(question1)
    c(answer1)

    c(question2)
    c(answer2) */

    const element = document.createElement("section")
    element.setAttribute("id", "faqSection")

    element.innerHTML = `

<section>
    <h1>Naše zmrzlina</h1>

    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                ${question1}
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                ${answer1}
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <h1>Dárkové poukazy</h1>

    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                ${question2}
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                ${answer2}
                </div>
            </div>
        </div>
    </div>
</section>
    `

    return element
}