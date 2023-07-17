import "./style.scss"

export const JobText = () => {

    const element = document.createElement("section")
    element.setAttribute("id", "jobText")

    element.innerHTML = `
    <div>
        <h2><b>Pojď pracovat k nám</b></h2>
        <p>Pokud tě baví špičková gastronomie a chceš být součástí týmu, který vyrábí a prodává nejlepší zmrzlinu v Praze, pojď 
        do <br> toho s námi v našich zmrzlinárnách Créme de la Créme!</p>
        <p><b>Těšíme se na Tebe</b><br>
            Honza Hochsteiger a celý jeho tým
        </p>
    </div>

    <div>
        <h2><b>Ozvěte se nám</b></h2>
        <p>V případě zájmu o nabízenou pracovní pozici nás prosím kontaktuj prostřednictvím tohoto formuláře. Těšíme se na Tebe.</p>
    </div>
    `

    return element
}