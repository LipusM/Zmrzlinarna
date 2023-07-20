
import "./style.scss"

export const PersonalInfo = () => {

    const element = document.createElement("main")

    element.innerHTML = `
    <section id="gdpr">
        <h1>Ochrana osobních údajů</h1>

        <p>Vážení zákazníci,  <br>
        prohlašujeme, že veškeré osobní údaje jsou důvěrné, budou použity pouze k uskutečnění plnění smlouvy s kupujícím a 
        marketingových akcí prodávajícího a nebudou jinak zveřejněny, poskytnuty třetí osobě apod. s výjimkou situace 
        související s distribucí či platebním stykem týkajícího se objednaného zboží (sdělení jména a adresy dodání). Prodávající 
        postupuje tak, aby subjekt údajů neutrpěl újmu na svých právech, zejména na právu na zachování lidské důstojnosti, a 
        také dbá na ochranu před neoprávněným zasahováním do soukromého a osobního života subjektu údajů. Osobní 
        údaje, které jsou poskytnuty dobrovolně kupujícím prodávajícímu za účelem splnění objednávky a marketingových akcí 
        prodávajícího, jsou shromažďovány, zpracovávány a uchovávány v souladu s platnými zákony České republiky, zejména 
        se zákonem č. 101/2000 Sb., o ochraně osobních údajů, v platném a účinném znění.
        </p>

        <p>
        Crème de la Crème s.r.o. (www.cremedelacreme.cz) může dále při poskytnutí souhlasu zpracovávat tzv. "cookies" tak, 
        aby usnadnily poskytování služeb informační společnosti, v souladu s ustanovením Směrnice 95/46/ES o účelu 
        "cookies" či podobných nástrojů a je zajištěno, aby uživatelům byly známy informace, které se ukládají do koncového 
        zařízení, jež používají, Crème de la Crème s.r.o., pro tento účel stanoví samostatné podmínky pro použití cookies. 
        Uživatelé mají možnost odmítnout, aby cookies nebo podobné nástroje byly ukládány do jejich koncových zařízení, 
        např. tím, že spustí ve svém prohlížeči funkcionalitu anonymního prohlížení.
        </p>
    </section>
    `

    return element
}