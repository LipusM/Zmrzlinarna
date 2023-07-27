const c = console.log.bind(document)

import './style.scss';

import { Header } from './components/Header/index.js'
import { Uvod } from './pages/Uvod/index.js'
import { Eshop } from './pages/Eshop/index.js'
import { Prace } from './pages/Prace/index.js'
import { Kontakty } from './pages/Kontakty/index.js'
import { Footer } from './components/Footer/index.js'
import { PersonalInfo } from './pages/PersonalInfo';
import { Error } from './pages/Error';

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
else if(page === "/kontakty"){
    pageElement.append(Kontakty())
}
else if(page === "/ochrana-osobnich-udaju"){
    pageElement.append(PersonalInfo())
} else{
    pageElement.append(Error())
}

pageElement.append(Footer())









