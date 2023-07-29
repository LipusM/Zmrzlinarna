const c = console.log.bind(document)

import "./style.scss"

import arrowDown from "./img/arrowDown.svg"

export const FaqBanner = () => {

    const element = document.createElement("section")
    element.setAttribute("id","faqBanner")

    element.innerHTML = `
    <div id="faqBannerText">
        <h1>Chcete se dozvědět více?</h1>
        <h1>Často kladené dotazy</h1>
    </div>
    <div id="faqArrow">
        <a href="#faqSection">
            <img src="${arrowDown}" alt="arrow down"> 
        </a> 
    </div>
    `

    return element
}