import { Entrees } from "./Entrees.js"
import { Sides } from "./SideDishes.js"
import { Vegetables } from "./Vegetables.js"

const render = async () => {
    const entreeHTML = await Entrees()
    const sidesHTML = await Sides()
    const veggieHTML = await Vegetables()
    const composedHTML = `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <div>
            <article>
                <section>
                    ${entreeHTML}
                </section>

                <section>
                    ${sidesHTML}
                </section>

                <section>
                    ${veggieHTML}
                </section>
            </article>
        </div>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            
        </article>
    `
    
    const container = document.querySelector("#container")
    container.innerHTML = composedHTML
}
document.addEventListener("createNewOrder", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
}

)

render()
    