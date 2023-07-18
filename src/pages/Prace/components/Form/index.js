
import "./style.scss"

export const Form = () => {

    const element = document.createElement("form")
    /* element.setAttribute("id", "jobForm") */

    element.innerHTML = `
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
            <input type="email" class="form-control" id="yourEmail" placeholder="Zadejte svůj e-mail">
        </div>

        <div class="mb-3 col-md-6">
            <label for="phone" class="form-label">Telefon *</label>
            <input type="text" class="form-control" id="phone" placeholder="Zadejte svůj telefon">
        </div>

        <div class="mb-3 col-md-6 inputFile">
            <label for="cvFile" class="form-label">Životopis *</label>
            <input type="file" id="cvFile">
        </div>

        <div class="mb-3 col-md-6 inputFile">
            <label for="yourImage" class="form-label">Fotografie *</label>
            <input type="file" id="yourImage">
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
                <a href="/ochrana-osobnich-udaju">Informace</a> o ochraně osobních údajů  
            </div>

            <div>
                <button type="submit" class="btn btn-primary">Odeslat</button>
            </div>
        </div>
  
    </div>
    `

    const formInfo = element.querySelector("#jobForm")

    const sendForm = (e) => {
        e.preventDefault()

        console.log("Ahoj světe!")
    }

    formInfo.addEventListener("click", sendForm)

    return element
}