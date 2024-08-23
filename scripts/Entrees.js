export const Entrees = async () => {
    const response = await fetch(" http://localhost:8088/entrees")
    const entrees = await response.json()

    let html = "<h2>Entrees</h2>"
    const divStringArray = entrees.map( (entree) => {
        return `<ul>
            <input type='radio' name=entree value='${entree.iD}'> ${entree.name}'
        </ul>`
    }
)

html += divStringArray.join("")

return html
}