const c = console.log.bind(document)

import './style.scss';

import { Header } from './components/Header/index.js'
import { Uvod } from './pages/Uvod/index.js'
import { Eshop } from './pages/Eshop/index.js'
import { Prace } from './pages/Prace/index.js'
import { Kontakty } from './pages/Kontakty/index.js'
import { Footer } from './components/Footer/index.js'

const pageElement = document.querySelector("#app")
const page = location.pathname

pageElement.append(Header())
if (page === "/"){
    pageElement.append(Uvod())
}
else if(page === "/e-shop"){
    pageElement.append(Eshop())
}
else if(page === "/prace"){
    pageElement.append(Prace())
}
else if(page === "/konatky"){
    pageElement.append(Kontakty())
}
pageElement.append(Footer())









