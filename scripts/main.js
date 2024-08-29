import { Orders } from "./DisplayReciepts.js"
import { Entrees } from "./Entrees.js"
import { saveOrderSubmission } from "./Sales.js"
import { Sides } from "./SideDishes.js"
import { Vegetables } from "./Vegetables.js"

const render = async () => {
    const entreeHTML = await Entrees()
    const sidesHTML = await Sides()
    const veggieHTML = await Vegetables()
    const OrderBtnHTML = await saveOrderSubmission()
    const receiptHTML = await Orders()
    const composedHTML = `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <div>
            <article class="choices">
                <section class="options">
                    ${entreeHTML}
                </section>

                <section class="options">
                    ${sidesHTML}
                </section>

                <section class="options">
                    ${veggieHTML}
                </section>
            </article>
        </div>

        <article>
            <div id="purchaseCombo">
                ${OrderBtnHTML}
            </div>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${receiptHTML}
        </article>
    `
    
    const container = document.querySelector("#container")
    container.innerHTML = composedHTML
}
document.addEventListener("createNewOrder", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

render()
    