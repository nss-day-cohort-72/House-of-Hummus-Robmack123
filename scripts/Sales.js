import { saveOrder } from "./TransientState.js"

const handleOrderSubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        saveOrder();
    }
}

export const saveOrderSubmission = () => {
    document.addEventListener("click", handleOrderSubmissionClick);

    return `<button id="purchase">Purchase Combo</button>`
}