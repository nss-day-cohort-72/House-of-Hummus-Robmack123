import { setSelectedEntree } from "./TransientState.js"

const handleEntreeChange = (changeEvent) => {
    if (changeEvent.target.name === "entree") {
        const chosenOption = parseInt(changeEvent.target.value)
        setSelectedEntree(chosenOption)
    }
}

export const Entrees = async () => {
    const response = await fetch(" http://localhost:8088/entrees")
    const entrees = await response.json()

    document.addEventListener("change", handleEntreeChange)

    let html = "<h2>Entrees</h2>"
    const divStringArray = entrees.map( (entree) => {
        return `<ul class="choices__base">
            <input type='radio' name='entree' value='${entree.id}'> ${entree.name}
        </ul>`
    }
)

html += divStringArray.join("")

return html
}