import { setSelectedSides } from "./TransientState.js"

const handleSideChange = (changeEvent) => {
    if (changeEvent.target.name === "side") {
        const chosenOption = parseInt(changeEvent.target.value)
        setSelectedSides(chosenOption)
    }
}

export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    document.addEventListener("change", handleSideChange)

    let html = "<h2>Sides</h2>"
    const divStringArray = sides.map( (side) => { 
        return `<ul>
            <input type='radio' name='side' value='${side.id}'> ${side.title}
        </ul>`
    }
)

html += divStringArray.join("")

return html
}