import { Entrees } from "./Entrees.js"

const render = async () => {
    const entreeHTML = await Entrees()
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

render()
    