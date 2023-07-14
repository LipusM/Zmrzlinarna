
import "./style.scss"
import arrowDown from "./img/arrowDown.svg"

export const Banner = () => {

    const element = document.createElement("section")
    element.setAttribute("id", "workBanner")

    element.innerHTML = `
    <a href="#jobIntro">
        <img src="${arrowDown}" alt="arrow down"> 
    </a> 
    `

    return element
}