const c = console.log.bind(document)

import "./style.scss"

import { Gelato } from "./Gelato/idnex"
import { IceCream } from "./IceCream/index"

export const Order = () => {

    const element = document.createElement("section")
    element.setAttribute("id","order")

    const iceCream = [{
        img: "Je možné uspořádat oslavu ve Vaší zmrzlinárně?",
        text: "Ano, večírek, meeting, workshop či oslavu je možné uspořádat ve všech našich provozovnách. Kontaktujte nás a my to rádi pro vás zajistíme.",
    },
    {
        img: "Je možné u Vás objednat narozeninový dort?",
        text: "Speciální narozeninové dorty s popisem na přání zatím nevyrábíme, je možné si u nás zakoupit celý dort z nabídky našich dortů. Je ale třeba objednávka alespoň 3 dny předem.",
    },
    {
        img: "Jaký je cenový rozdíl mezi veganskými, zdravými a klasickými zmrzlinami?",
        text: "Všechny druhy zmrzliny včetně zdravých a veganských prodáváme maloobchodně vždy za stejnou cenu jen dle velikosti porce. Tak to bylo, je a tak to zůstane.",
    },
    ]

    const gelato = [{
        img: "Je možné uspořádat oslavu ve Vaší zmrzlinárně?",
        text: "Ano, večírek, meeting, workshop či oslavu je možné uspořádat ve všech našich provozovnách. Kontaktujte nás a my to rádi pro vás zajistíme.",
    },
    {
        img: "Je možné u Vás objednat narozeninový dort?",
        answer: "Speciální narozeninové dorty s popisem na přání zatím nevyrábíme, je možné si u nás zakoupit celý dort z nabídky našich dortů. Je ale třeba objednávka alespoň 3 dny předem.",
    },
    {
        img: "Jaký je cenový rozdíl mezi veganskými, zdravými a klasickými zmrzlinami?",
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