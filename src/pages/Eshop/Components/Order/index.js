const c = console.log.bind(document)

import "./style.scss"

import { Gelato } from "./Gelato/idnex"
import { IceCream } from "./IceCream/index"

export const Order = () => {

    const element = document.createElement("section")
    element.setAttribute("id","order")

    element.innerHTML = `
    <div class="mb-3 col-md-6">
        <label for="knowUs" class="form-label">Výrobek k objednání: *</label>
        <select class="form-select" id="knowUs" aria-label="Default select example">
            <option selected>Vše</option>
            <option value="1">Gelato</option>
            <option value="2">Zmrzlina</option>
        </select>
    </div>
    `

    return element
}