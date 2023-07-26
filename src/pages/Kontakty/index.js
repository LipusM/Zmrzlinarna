const c = console.log.bind(document)

import './style.scss'

import { IntroText } from './components/IntroText'
import { Form } from './components/Form'
import { Map } from './components/Map'

export const Kontakty = () => {

    const element = document.createElement("main")

    element.append(IntroText(), Form(), Map())

    return element
}