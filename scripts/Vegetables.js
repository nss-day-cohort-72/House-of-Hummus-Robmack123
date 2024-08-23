import { setSelectedVeggies } from "./TransientState.js"

const handleVeggieChange = (changeEvent) => {
    if (changeEvent.target.name === "vegetable") {
        const chosenOption = parseInt(changeEvent.target.value)
        setSelectedVeggies(chosenOption)
    }
}

export const Vegetables = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    document.addEventListener("change", handleVeggieChange)

    let html = "<h2>Veggies</h2>"

    const divStringArray = vegetables.map( (vegetable) => {
        return `<ul class="choices__veggies">
        <input type='radio' name="vegetable" value='${vegetable.id}'> ${vegetable.type}
    </ul>`
}
)

html += divStringArray.join("")
return html    
}