const c = console.log.bind(document)

import './style.scss'

import { Banner } from "./components/Banner/index.js"

export const Prace = () => {

    const element = document.createElement("main")
    element.append(Banner())

    return element
}