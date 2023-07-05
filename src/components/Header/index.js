const c = console.log.bind(document)

import './style.scss'
import './styleMobile.scss'
import menu from './img/menu.png'

export const Header = () => {

    const element = document.createElement("header")

    element.innerHTML = `
    <div id="nav-btn">
        <img src="${menu}" alt="menuPanel"> 
    </div>
    <nav id="nav-panel">
        <a href="/" id="intro">Úvod</a>
        <a href="/e-shop" id="eshop">E-shop</a>
        <a href="/prace" id="job">Práce</a>
        <a href="/kontakty" id="contact">Kontakty</a>
    </nav>
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

    const navBtn = document.querySelector("#nav-btn")

    return element
}














