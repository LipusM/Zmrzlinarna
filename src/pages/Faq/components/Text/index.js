
import "./style.scss"

export const Text = () => {

    const element = document.createElement("section")
    element.setAttribute("id", "introText")
    
    element.innerHTML = `
        <h2>Chcete se na něco zeptat?</h2>

        <a href="/faq" target="_blank">Odpovědi na nejčastější otázky (FAQ).</a> 
    `

    return element
}