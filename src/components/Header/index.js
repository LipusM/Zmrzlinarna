const c = console.log.bind(document)

import './style.scss'
import menu from './img/menu.png'
import logo from './img/logo.svg'

export const Header = () => {

    const element = document.createElement("header")

    element.innerHTML = `
    <section id="mobileHeader">
        <div id="nav-btn" class="firstSection">
            <div class="navPart"></div>
            <div class="navPart"></div>
            <div class="navPart"></div>
        </div>

        <div id="myLogo" class="firstSection">
            <div>
                <img src="${logo}" alt="logo"> 
            </div>
        </div>
    </section>

    <section>
        <nav id="nav-panel" class="nav-closed">
            <a href="/" id="intro">Úvod</a>
            <a href="/e-shop" id="eshop">E-shop</a>
            <a href="/prace" id="job">Práce</a>
            <a href="/kontakty" id="contact">Kontakty</a>
        </nav>
    </section>
    `

    const page = location.pathname

    if(page === "/"){
        element.querySelector("#intro").classList.add("active-link")
    }
    else if(page === "/e-shop"){
        element.querySelector("#eshop").classList.add("active-link")
    }
    else if(page === "/prace"){
        element.querySelector("#job").classList.add("active-link")
    }
    else if(page === "/kontakty"){
        element.querySelector("#contact").classList.add("active-link")
    }


    //Funkce pro otevírání a zavírání navigačního panelu
    const navBtn = element.querySelector("#nav-btn")
    const navPanel = element.querySelector("#nav-panel")
    navBtn.addEventListener("click", () => {
        navPanel.classList.toggle("nav-closed")


        navBtn.classList.toggle("menuBtn")
    })


    //Funkce pro scrollování nahoru na obrazovku
    const myLogo = element.querySelector("#myLogo")
    myLogo.addEventListener("click", () => {
        window.scrollTo(0, 0)
    })

    return element
}














