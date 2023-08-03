const c = console.log.bind(document)

import "./style.scss"

import { Header } from "./Header"

export const FaQ2 = (props) => {

    const {question, answer} = props

    const element = document.createElement("section")
    element.setAttribute("id", "faq2")

    element.append(Header())
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