
import "./style.scss"

export const Map = () => {

    const element = document.createElement("section")
    element.setAttribute("id", "ourPlaces")

    element.innerHTML = `
        <h2>Kde najdete naše zmrzlinárny</h2>

        <div id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40963.368540724114!2d14.450565!3d50.082345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b933cf979e8b5%3A0xd6575317a27a808!2zTWFsZcWhaWNrw70gcGFyaw!5e0!3m2!1scs!2sus!4v1690389378708!5m2!1scs!2sus" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    `

    return element
}