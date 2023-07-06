const c = console.log.bind(document)

import './style.scss'

export const Footer = () => {

    const element = document.createElement("footer")

    element.innerHTML = `
    <div>
        <div>
            Created by Mariusz Lipus, Copyright ©
        </div>
    </div>
    `

    return element
}