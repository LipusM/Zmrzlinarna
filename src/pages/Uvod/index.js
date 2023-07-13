const c = console.log.bind(document)

import './style.scss'
import iceCream from './img/iceCream.png'

export const Uvod = () => {

    const element = document.createElement("main")
    
    element.innerHTML = `
    <section id="introBanner">
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
    </section>

    <section id="introSecond">
            <div id="textImage">
                <img src="${iceCream}" alt="Chocolate ice-cream"> 
            </div>
            <div id="text">
                <h1>milujeme zmrzlinu</h1>
                <p>A tato naše vášeň nás přivedla až do italských končin, kde jsme se několik let učili od nejlepších místních mistrů vyrábět tu nejlahodnější řemeslnou zmrzlinu, která zaručeně uchvátí vaše smysly.
                Crème de la Crème je kvalita, čistá a dokonalá chuť.
                A láska. Zamilujte se s námi!</p>
            </div>
    </section>
    `

    return element
}