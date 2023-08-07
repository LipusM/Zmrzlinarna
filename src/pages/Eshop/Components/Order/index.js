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

    const iceCreams = [{
        img: iceCream1,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris metus. Aliquam erat volutpat. Neque porro.",
    },
    {
        img: iceCream2,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris metus. Aliquam erat volutpat. Neque porro.",
    },
    {
        img: iceCream3,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris metus. Aliquam erat volutpat. Neque porro.",
    },
    {
        img: iceCream4,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris metus. Aliquam erat volutpat. Neque porro.",
    },
    ]

    const gelatos = [{
        img: gelato1,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris metus. Aliquam erat volutpat. Neque porro.",
    },
    {
        img: gelato2,
        text: "Lorem ipsum dolor sit amet, consectfetuer adipiscing elit. Mauris metus. Aliquam erat volutpat. Neque porro.",
    },
    {
        img: gelato3,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris metus. Aliquam erat volutpat. Neque porro.",
    },
    {
        img: gelato4,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris metus. Aliquam erat volutpat. Neque porro.",
    },
    {
        img: gelato5,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris metus. Aliquam erat volutpat. Neque porro.",
    },
    ]

    element.innerHTML = `
    <div class="mb-3>
        <label for="selectProduct" class="form-label">Vyberte si, co se vaše srdce přeje!</label>
        <select class="form-select" id="selectProduct" aria-label="Default select example">
            <option value="0" selected>Vyberte mlsání!</option>
            <option value="1">Všechno!</option>
            <option value="2">Gelato</option>
            <option value="3">Zmrzlina</option>
        </select>
    </div>

    <div id="chosenProducts"></div>
    `

    const selectProduct = element.querySelector("#selectProduct")
    const chosenProcuts = element.querySelector("#chosenProducts")
    
    selectProduct.addEventListener("click", () => {

        if(selectProduct.value === "0"){
            chosenProcuts.innerHTML = ``

            chosenProcuts.append(
                ...gelatos.map(gelato => 
                    Gelato({
                        img: gelato.img,
                        text: gelato.text,
                    })),
                    ...iceCreams.map(iceCream => 
                        IceCream({
                            img: iceCream.img,
                            text: iceCream.text,
                        }))
                )
        }
        else if(selectProduct.value === "1"){
            chosenProcuts.innerHTML = ``

            chosenProcuts.append(
                ...gelatos.map(gelato => 
                    Gelato({
                        img: gelato.img,
                        text: gelato.text,
                    })),
                    ...iceCreams.map(iceCream => 
                        IceCream({
                            img: iceCream.img,
                            text: iceCream.text,
                        }))
                )
        }
        else if(selectProduct.value === "2"){
            chosenProcuts.innerHTML = ``

            chosenProcuts.append(
                ...gelatos.map(gelato => 
                    Gelato({
                        img: gelato.img,
                        text: gelato.text,
                    }))
                )
        }
        else if(selectProduct.value === "3"){
            chosenProcuts.innerHTML = ``

            chosenProcuts.append(
                ...iceCreams.map(iceCream => 
                    IceCream({
                        img: iceCream.img,
                        text: iceCream.text,
                    }))
                )
        }

    })

    return element
}