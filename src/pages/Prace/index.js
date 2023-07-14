const c = console.log.bind(document)

import './style.scss'

import { Banner } from "./components/Banner/index.js"
import { JobText } from './components/JobText'

export const Prace = () => {

    const element = document.createElement("main")
    element.append(Banner(), JobText())

    return element
}