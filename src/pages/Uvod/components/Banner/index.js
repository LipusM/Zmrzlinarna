
import './style.scss'

export const Banner = () => {

    const element = document.createElement("section")
    element.setAttribute("id", "introBanner")

    element.innerHTML = `
    <div id="allIntroBanner">
        <div id="introBannerText">
            <h1>Vyrábíme nejlepší</h1>
            <h1>italskou zmrzlinu</h1>
            <h1>v Praze</h1>
        </div>
        <div id="introBannerButton">
            <a href="#introSecond"><button type="button" class="btn btn-primary">Více o Nás</button></a>
        </div>
    </div>
    `

    return element
}