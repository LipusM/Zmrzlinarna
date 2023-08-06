const c = console.log.bind(document)

import "./style.scss"

export const IntroText = () => {

    const element = document.createElement("section")
    element.setAttribute("id","introTextEshop")

    element.innerHTML = `
    <h1>E-shop</h1>

    <h3>Jak a kdy zmrzlinu objednat:</h3>

    <p>Níže si vyberte provozovnu, kde si chcete zmrzlinu / voucher vyzvednout, nebo odkud Vám zmrzlinu / voucher přiveze kurýr 
    (max. 4km od vybrané provozovny). Pouze vouchery v hodnotě 1500Kč a více Vám pošleme kamkoli v ČR 
    poštou (detailní instrukce jsou pod provozovnami). Vouchery nelze zasílat emailem. </p>
    `

    return element
}