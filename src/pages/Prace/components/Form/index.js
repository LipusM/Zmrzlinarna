const c = console.log.bind(document)


import "./style.scss"

export const Form = () => {

    const element = document.createElement("form")

    element.innerHTML = `
    <div id="thankYou" class="messageNone">
        Děkujeme za Váš zájem u nás pracovat. V případě zájmu Vás budeme kontaktovat.
    </div>

    <div class="row" id="jobForm">
        <div class="mb-3 col-md-6">
            <label for="nameSurname" class="form-label">Jméno a příjmení *</label>
            <input type="text" class="form-control" id="nameSurname" placeholder="Zadejte své jméno a příjmení">
        </div>

        <div class="mb-3 col-md-6">
            <label for="jobPosition" class="form-label">Zájem o pozici *</label>
            <select class="form-select" id="jobPosition" aria-label="Default select example">
                <option selected></option>
                <option value="1">Vedoucí směny</option>
                <option value="2">Barista</option>
                <option value="3">Jiná pozice</option>
            </select>
        </div>

        <div class="mb-3 col-md-6">
            <label for="yourEmail" class="form-label">E-mail *</label>
            <input type="text" class="form-control" id="yourEmail" placeholder="Zadejte svůj e-mail">
        </div>

        <div class="mb-3 col-md-6">
            <label for="phone" class="form-label">Telefon *</label>
            <input type="text" class="form-control" id="phone" placeholder="Zadejte svůj telefon">
        </div>

        <div class="mb-3 col-md-6 inputFile">
            <label for="cvFile" class="form-label">Životopis *</label>
            <input type="file" accept=".pdf, .docx" id="cvFile">
        </div>

        <div class="mb-3 col-md-6 inputFile">
            <label for="yourImage" class="form-label">Fotografie *</label>
            <input type="file" accept=".jpg, .jpeg, .png" id="yourImage">
        </div>

        <div class="mb-3 col-md-6">
            <label for="knowUs" class="form-label">Odkud jste se o nás dozvěděli *</label>
            <select class="form-select" id="knowUs" aria-label="Default select example">
                <option selected></option>
                <option value="1">Jobs.cz</option>
                <option value="2">Prace.cz</option>
                <option value="3">Facebook</option>
                <option value="4">Instagram</option>
                <option value="5">Leták</option>
                <option value="6">Od známého</option>
                <option value="7">Jiné</option>
            </select>
        </div>

        <div class="mb-3 col-md-6">
            <label for="fbProfile" class="form-label">Facebook profil</label>
            <input type="text" class="form-control" id="fbProfile" placeholder="">
        </div>

        <div class="mb-3 col-md-12">
            <label for="aboutYou" class="form-label">Něco o tobě *</label>
            <textarea class="form-control" id="aboutYou" rows="6" placeholder="Jaké máš zkušenosti, co chceš dělat, představ se."></textarea>
        </div>

        <div id="infoAndButton">
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
    const yourName = element.querySelector("#nameSurname")
    let yourNameCheck = false

    const nameCheck = () => {
        if (yourName.value === "") {
            yourName.classList.add("wrongInput")
        } else {
            yourName.classList.remove("wrongInput")
            yourNameCheck = true
        }

        return yourNameCheck
    }

    //Kontrola výběru pracovní pozice
    const wrJob = element.querySelector("#jobPosition")
    let jobChoiceCheck = false

    const jobCheck = () => {

        if (wrJob.value === "") {
            wrJob.classList.add("wrongInput")
        } else {
            wrJob.classList.remove("wrongInput")
            jobChoiceCheck = true
        }

        return jobChoiceCheck
    }

    //Všechny funkce pro verifikaci formuláře
    //Kontrola e-mailu
    const wrEmail = element.querySelector("#yourEmail")
    let emailDomainCheck = false

    const domains = ["@gmail.com", "@yahoo.com", "@seznam.cz", "@email.cz", "@volny.cz", "@protonmail.com", "@email.sk"]

    const emailCheck = () => {

        const emailValue = wrEmail.value

        domains.some(domain => 

                {
                    if( !emailValue.includes(domain) ){
                        wrEmail.classList.add("wrongInput")
                    } 
                    else {

                        let partDomain = domain.slice(0, -1) //Od začátku domény do konce
                        let lastPartDomain = domain.slice(-1) //Zjištění poslední hodnoty domény
                        let entireDomain = partDomain + lastPartDomain //Výpis celé vložené domény

                        let signIndex = emailValue.indexOf("@")

                        //Zjišťování, zdali se vstup od @ (včetně) rovná hodnotám v DOMAINS. Také zdali před @ existuje hodnota
                        if( entireDomain !== emailValue.slice(signIndex) || emailValue.slice(0, signIndex) === "" ){
                            wrEmail.classList.add("wrongInput")
                        } else{
                            wrEmail.classList.remove("wrongInput")
                            return emailDomainCheck = true
                        }
                    }   
                })
        return emailDomainCheck
    }

    //Kontrola telefonu
    const wrPhone = element.querySelector("#phone")
    let phoneNumberCheck = false

    const phoneCheck = () => {

        if(wrPhone.value.length  !== 9){
            wrPhone.classList.add("wrongInput")
        } else {
            wrPhone.classList.remove("wrongInput")
            phoneNumberCheck = true
        }

        return phoneNumberCheck
    }

    //Kontrola nahraného CV
    const upCV = element.querySelector("#cvFile")
    let cV = false

    const cvCheck = () => {
        
        if( upCV.value === "" ){
            upCV.classList.add("wrongInput")
        } else {
            upCV.classList.remove("wrongInput")
            cV = true
        }

        return cV
    }

    //Kontrola nahrané fotografie
    const upPhoto = element.querySelector("#yourImage")
    let photo = false

    const photoCheck = () => {

        if( upPhoto.value === "" ){
            upPhoto.classList.add("wrongInput")
        } else {
            upPhoto.classList.remove("wrongInput")
            photo = true
        }

        return photo
    }

    //Kontrola Odkus jste se o nás dozvěděli
    const wrAboutUs = element.querySelector("#knowUs")
    let aboutUs = false

    const aboutUsCheck = () => {

        if (wrAboutUs.value === "") {
            wrAboutUs.classList.add("wrongInput")
        } else {
            wrAboutUs.classList.remove("wrongInput")
            aboutUs = true
        }

        return aboutUs
    }

    //Kontrola, zdali byl napsaný text do textového pole
    const wrAboutYou = element.querySelector("#aboutYou")
    let you = false
    
    const aboutYouCheck = () => {

        if (wrAboutYou.value === "") {
            wrAboutYou.classList.add("wrongInput")
        } else {
            wrAboutYou.classList.remove("wrongInput")
            you = true
        }

        return you
    }

    //Zobrazení děkovné zprávy
    const thankYouMessage = () => {

        const theMessage = element.querySelector("#thankYou")
        theMessage.classList.add("messageShown")
    }

    //Skrytí děkovné zprávy
    const hideThankYouMessage = () => {

        const theMessage = element.querySelector("#thankYou")
        theMessage.classList.remove("messageShown")
    }


    //Odesílání formuláře a vyhodnocení výše napsaných funkcí
    const sendForm = (e) => {
        e.preventDefault()

        nameCheck()
        let nameReturn = nameCheck()

        jobCheck()
        let jobReturn = jobCheck()

        emailCheck()
        let emailReturn = emailCheck()

        phoneCheck()
        let phoneReturn = phoneCheck()

        cvCheck()
        let cvReturn = cvCheck()

        photoCheck()
        let photoReturn = photoCheck()

        aboutUsCheck()
        let aboutUsReturn = aboutUsCheck()

        aboutYouCheck()
        let aboutYouReturn = aboutYouCheck()


        if(nameReturn && jobReturn && emailReturn && phoneReturn && cvReturn && photoReturn && aboutUsReturn && aboutYouReturn){
            

            thankYouMessage()
            setTimeout(hideThankYouMessage, 3000)
        }
    }


    element.addEventListener("submit", sendForm)

    return element
}