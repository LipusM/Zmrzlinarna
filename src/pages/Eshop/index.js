const c = console.log.bind(document)

import './style.scss'

import { Gelato } from './Components/Gelato/idnex.js'
import { IceCream } from './Components/IceCream/index.js'
import { IntroText } from './Components/IntroText/index.js'

export const Eshop = () => {

    const element = document.createElement("section")
    element.setAttribute("id","eshopSection")

    return element
}