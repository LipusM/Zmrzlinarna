
const c = console.log.bind(document)

import "./style.scss"

export const Form = () => {

    const element = document.createElement("form")
    element.setAttribute("id", "contactsForm")

    element.innerHTML = `
    <div class="row">
        <div class="mb-3 col-md-6">
            <label for="name" class="form-label">Jméno *</label>
            <input type="text" class="form-control" id="name" placeholder="Zadejte své jméno a příjmení">
        </div>

        <div class="mb-3 col-md-6">
            <label for="company" class="form-label">Firma *</label>
            <input type="text" class="form-control" id="company" placeholder="Zadejte název vaší firmy">
        </div>

        <div class="mb-3 col-md-6">
            <label for="yourEmail" class="form-label">E-mail *</label>
            <input type="text" class="form-control" id="yourEmail" placeholder="Zadejte váš e-mail">
        </div>

        <div class="mb-3 col-md-6">
            <label for="yourEmail" class="form-label">Telefon</label>
            <input type="text" class="form-control" id="yourEmail" placeholder="Zadejte váš telefon">
        </div>

        <div class="mb-3 col-md-12">
            <label for="textMessage" class="form-label">Text zprávy *</label>
            <textarea class="form-control" id="textMessage" rows="6" placeholder="Napište, co máte na srdci"></textarea>
        </div>

        <div id="infoAndButtonContacts">
            <div>
                <a href="/ochrana-osobnich-udaju" target="_blank">Informace</a> o ochraně osobních údajů  
            </div>

            <div>
                <button type="submit" class="btn btn-primary">Odeslat</button>
            </div>
        </div>

    </div>
    `
    const sendContactsForm = (e) => {
        e.preventDefault()
        
    }

    element.addEventListener("submit", sendContactsForm)

    return element
}