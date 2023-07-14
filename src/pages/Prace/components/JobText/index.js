import "./style.scss"

export const JobText = () => {

    const element = document.createElement("section")
    element.setAttribute("id", "jobIntro")

    element.innerHTML = `
    <h2><b>Pojď pracovat k nám</b></h2>
    <p>Pokud tě baví špičková gastronomie a chceš být součástí týmu, který vyrábí a prodává nejlepší zmrzlinu v Praze, pojď 
    do <br> toho s námi v našich zmrzlinárnách Créme de la Créme!</p>
    <p><b>Těšíme se na Tebe</b><br>
        Honza Hochsteiger a celý jeho tým
    </p>
    `

    return element
}