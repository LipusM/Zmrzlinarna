const c = console.log.bind(document)

import "./style.scss"

import { Gelato } from "./Gelato/idnex"
import { IceCream } from "./IceCream/index"

export const Order = () => {

    const element = document.createElement("section")
    element.setAttribute("id","order")

    element.innerHTML = `
    <div class="mb-3>
        <label for="selectProduct" class="form-label">Vyberte si, co se vaše srdce přeje!</label>
        <select class="form-select" id="selectProduct" aria-label="Default select example">
            <option selected>Vše</option>
            <option value="1">Gelato</option>
            <option value="2">Zmrzlina</option>
        </select>
    </div>

    <div id="chosenProducts"></div>
    `

    return element
}