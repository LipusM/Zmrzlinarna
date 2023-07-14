
import './style.scss'
import iceCream from './img/iceCream.png'

export const Main = () => {

    const element = document.createElement("section")
    element.setAttribute("id", "introSecond")

    element.innerHTML = `
    <div id="textImage">
        <img src="${iceCream}" alt="Chocolate ice-cream"> 
    </div>
    <div id="text">
        <h1>milujeme zmrzlinu</h1>
        <p>A tato naše vášeň nás přivedla až do italských končin, kde jsme se 
        několik let učili od nejlepších místních mistrů vyrábět tu nejlahodnější 
        řemeslnou zmrzlinu, která zaručeně uchvátí vaše smysly.
        Crème de la Crème je kvalita, čistá a dokonalá chuť.
        A láska. Zamilujte se s námi!</p>

        <a href="/e-shop"><button type="button" class="btn btn-primary">E-shop</button></a>
    </div>
    `

    return element
}