const c = console.log.bind(document)

import "./style.scss"

export const Error = () => {

    const currentUrl = window.location.href

    const element = document.createElement("section")
    element.setAttribute("id", "errorPage")

    element.innerHTML = `
    <h1>Stránka nebyla nalezena</h1>

    <p>Je nám líto, ale požadovaná stránka "<b>${currentUrl}</b>" není k dispozici.
    Je možné, že stránka byla odstraněna, přejmenována nebo je dočasně nedostupná. Je rovněž možné, že jste udělali chybu při zadávání adresy.
    </p>

    <p>Zkuste následující možnosti:</p>
    <ol>
        <li>Pokud jste adresu zadali ručně, <b>zkontrolujte, zda jste neudělali chybu</b>.</li>
        <li>Přejděte na <a href="/">úvodní stranu</a>.</li>
        <li>Použijte <b>hlavní menu</b> v horní části stránky.</li>
    </ol>
    `

    return element
}