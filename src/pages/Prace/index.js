const c = console.log.bind(document)

import './style.scss'

import { Banner } from "./components/Banner"
import { JobText } from './components/JobText'
import { Form } from './components/Form'

export const Prace = () => {

    const element = document.createElement("main")
    element.append(Banner(), JobText(), Form())

    return element
}