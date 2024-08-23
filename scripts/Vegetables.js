

// const veggies = getVeggies()

// docment.addEventListener("change", (event) => {
//     if (event.target.name === "vegetable") {
//         setVeggie(event.target.value)
//     }
// })

export const Vegetables = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    let html = "<h2>Veggies</h2>"

    const divStringArray = vegetables.map( (vegetable) => {
        return `<ul>
        <input type='radio' name=entree value='${vegetable.id}'> ${vegetable.type}
    </ul>`
}
)

html += divStringArray.join("")
return html    
}