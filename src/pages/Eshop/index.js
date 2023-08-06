const c = console.log.bind(document)

import './style.scss'


import { IntroText } from './Components/IntroText/index.js'
import { Order } from './Components/Order/index.js'

export const Eshop = () => {

    const element = document.createElement("section")
    element.setAttribute("id","eshopPart")

    element.append(IntroText(), Order())

    return element
}