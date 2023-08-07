const c = console.log.bind(document)

import "./style.scss"

export const IceCream = (props) => {

    const {img, text} = props

    const element = document.createElement("section")
    element.setAttribute("class","iceCream")

    element.innerHTML = `
        <div class="myIceCream">
            <div> <img src="${img}" alt="Gelato!"> </div>
            <div class="iceCreamText">${text}</div>
            <div class="orderButton"><button type="button" class="btn btn-primary">Objednat</button></div>
        </div>
    `

    const orderButton = element.querySelector("button")

    orderButton.addEventListener("click", () => {
        
        if(orderButton.textContent === "Objednat"){
            orderButton.textContent = "Objednáno"
        } else {
            orderButton.textContent = "Objednat"
        }
    })

    return element
}