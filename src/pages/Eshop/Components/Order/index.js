const c = console.log.bind(document)

import "./style.scss"

import { Gelato } from "./Gelato/idnex"
import { IceCream } from "./IceCream/index"

import gelato1 from "./img/gelato/gelato1.jpg"
import gelato2 from "./img/gelato/gelato2.jpg"
import gelato3 from "./img/gelato/gelato3.jpg"
import gelato4 from "./img/gelato/gelato4.jpg"
import gelato5 from "./img/gelato/gelato5.jpg"

import iceCream1 from "./img/iceCream/iceCream1.jpg"
import iceCream2 from "./img/iceCream/iceCream2.jpg"
import iceCream3 from "./img/iceCream/iceCream3.jpg"
import iceCream4 from "./img/iceCream/iceCream4.jpg"

export const Order = () => {

    const element = document.createElement("section")
    element.setAttribute("id","order")

    const iceCream = [{
        img: iceCream1,
        text: "Ano, večírek, meeting, workshop či oslavu je možné uspořádat ve všech našich provozovnách. Kontaktujte nás a my to rádi pro vás zajistíme.",
    },
    {
        img: iceCream2,
        text: "Speciální narozeninové dorty s popisem na přání zatím nevyrábíme, je možné si u nás zakoupit celý dort z nabídky našich dortů. Je ale třeba objednávka alespoň 3 dny předem.",
    },
    {
        img: iceCream3,
        text: "Všechny druhy zmrzliny včetně zdravých a veganských prodáváme maloobchodně vždy za stejnou cenu jen dle velikosti porce. Tak to bylo, je a tak to zůstane.",
    },
    {
        img: iceCream4,
        text: "Všechny druhy zmrzliny včetně zdravých a veganských prodáváme maloobchodně vždy za stejnou cenu jen dle velikosti porce. Tak to bylo, je a tak to zůstane.",
    },
    ]

    const gelato = [{
        img: gelato1,
        text: "Ano, večírek, meeting, workshop či oslavu je možné uspořádat ve všech našich provozovnách. Kontaktujte nás a my to rádi pro vás zajistíme.",
    },
    {
        img: gelato2,
        answer: "Speciální narozeninové dorty s popisem na přání zatím nevyrábíme, je možné si u nás zakoupit celý dort z nabídky našich dortů. Je ale třeba objednávka alespoň 3 dny předem.",
    },
    {
        img: gelato3,
        text: "Všechny druhy zmrzliny včetně zdravých a veganských prodáváme maloobchodně vždy za stejnou cenu jen dle velikosti porce. Tak to bylo, je a tak to zůstane.",
    },
    {
        img: gelato4,
        answer: "Speciální narozeninové dorty s popisem na přání zatím nevyrábíme, je možné si u nás zakoupit celý dort z nabídky našich dortů. Je ale třeba objednávka alespoň 3 dny předem.",
    },
    {
        img: gelato5,
        text: "Všechny druhy zmrzliny včetně zdravých a veganských prodáváme maloobchodně vždy za stejnou cenu jen dle velikosti porce. Tak to bylo, je a tak to zůstane.",
    },
    ]

    element.innerHTML = `
    <div class="mb-3>
        <label for="selectProduct" class="form-label">Vyberte si, co se vaše srdce přeje!</label>
        <select class="form-select" id="selectProduct" aria-label="Default select example">
            <option selected>Vyberte mlsání</option>
            <option value="1">Všechno!</option>
            <option value="2">Gelato</option>
            <option value="3">Zmrzlina</option>
        </select>
    </div>

    <div id="chosenProducts"></div>
    `

    const selectProduct = element.querySelector("#selectProduct")
    
    selectProduct.addEventListener("click", () => {
        c(selectProduct.value)
    })

    return element
}