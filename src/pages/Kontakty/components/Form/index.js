const c = console.log.bind(document)

import "./style.scss"

export const Form = () => {

    const element = document.createElement("form")
    /* element.setAttribute("id", "contactsForm") */

    element.innerHTML = `
    <div id="thankYou" class="messageNoneC">
        Děkujeme za Váš zájem u nás pracovat. V případě zájmu Vás budeme kontaktovat.
    </div>

    <div class="row" id="contactsForm">
        <div class="mb-3 col-md-6">
            <label for="name" class="form-label">Jméno *</label>
            <input type="text" class="form-control" id="name" placeholder="Zadejte své jméno a příjmení">
        </div>

        <div class="mb-3 col-md-6">
            <label for="company" class="form-label">Firma </label>
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

    //FUNKCE PRO ZPRACOVÁNÍ FORMULÁŘE

    //Kontrola jména
    const yourName = element.querySelector("#name")
    let yourNameCheck = false

    const nameCheck = () => {
        if (yourName.value === "") {
            yourName.classList.add("wrongInput")
            yourNameCheck = false
        } else {
            yourName.classList.remove("wrongInput")
            yourNameCheck = true
        }

        return yourNameCheck
    }

    //Kontrola e-mailu
    const wrEmail = element.querySelector("#yourEmail")
    let emailDomainCheck = false

    const domains = ["@gmail.com", "@yahoo.com", "@seznam.cz", "@email.cz", "@volny.cz", "@protonmail.com", "@email.sk"]

    const emailCheck = () => {

        const emailValue = wrEmail.value

        domains.some(domain =>

            {
                if (!emailValue.includes(domain)) {
                    wrEmail.classList.add("wrongInput")
                    emailDomainCheck = false
                } else {

                    let partDomain = domain.slice(0, -1) //Od začátku domény do konce
                    let lastPartDomain = domain.slice(-1) //Zjištění poslední hodnoty domény
                    let entireDomain = partDomain + lastPartDomain //Výpis celé vložené domény

                    let signIndex = emailValue.indexOf("@")

                    //Zjišťování, zdali se vstup od @ (včetně) rovná hodnotám v DOMAINS. Také zdali před @ existuje hodnota
                    if (entireDomain !== emailValue.slice(signIndex) || emailValue.slice(0, signIndex) === "") {
                        wrEmail.classList.add("wrongInput")
                        emailDomainCheck = false
                    } else {
                        wrEmail.classList.remove("wrongInput")
                        return emailDomainCheck = true
                    }
                }
            })

        return emailDomainCheck
    }

    //Kontrola, zdali byl napsaný text do textového pole
    const wrMessage = element.querySelector("#textMessage")
    let yourMessage = false

    const aboutYouCheck = () => {

        if (wrMessage.value === "") {
            wrMessage.classList.add("wrongInput")
            yourMessage = false
        } else {
            wrMessage.classList.remove("wrongInput")
            yourMessage = true
        }

        return yourMessage
    }

    //Zobrazení děkovné zprávy
    const theMessage = element.querySelector("#thankYou")

    const thankYouMessage = () => {

        /* const theMessage = element.querySelector("#thankYou") */
        theMessage.classList.add("messageShown")

        /* setTimeout(theMessage.classList.remove("messageShown"), 3000) */
    }

    //Skrytí děkovné zprávy
   /*  const theMessage = element.querySelector("#thankYou") */

    const hideThankYouMessage = () => {

            theMessage.style.opacity = 1

            const interval = setInterval(() => {
                theMessage.style.opacity -= 0.1
    
                if (theMessage.style.opacity < 0) {
                    theMessage.classList.remove("messageShown")
                    theMessage.style.opacity = 1
                    clearInterval(interval)
                }
            }, 50)


    }

    const sendContactsForm = (e) => {
        e.preventDefault()

        nameCheck()
        let nameReturn = nameCheck()

        emailCheck()
        let emailReturn = emailCheck()

        aboutYouCheck()
        let aboutYouReturn = aboutYouCheck()


        if (nameReturn && emailReturn && aboutYouReturn) {
            yourName.value = ""
            wrEmail.value = ""
            wrMessage.value = ""

            thankYouMessage()
            setTimeout(hideThankYouMessage, 3000)
        }
    }

    element.addEventListener("submit", sendContactsForm)

    return element
}