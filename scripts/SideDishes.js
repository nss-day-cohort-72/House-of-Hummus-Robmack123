


// document.addEventListener("change", (event) => {
//     if (event.target.name === "sideDish") {
//         setSide(parseInt(event.target.value))
//     }
// })


export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    let html = "<h2>Sides</h2>"
    const divStringArray = sides.map( (side) => { 
        return `<ul>
            <input type='radio' name=entree value='${side.id}'> ${side.title}
        </ul>`
    }
)

html += divStringArray.join("")

return html
}