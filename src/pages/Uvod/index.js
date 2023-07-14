const c = console.log.bind(document)

import './style.scss'

import { Banner } from './components/Banner/index.js'
import { Main } from "./components/Main/index.js"

export const Uvod = () => {

    const element = document.createElement("main")
    element.append(Banner(), Main())

    return element
}