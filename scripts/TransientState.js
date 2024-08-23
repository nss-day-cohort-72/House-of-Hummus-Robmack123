const transientState = {
    entreesId: 0,
    vegetablesId: 0,
    sidesId: 0
}

export const setSelectedEntree = (entreesId) => {
    transientState.entreesId = entreesId
    console.log(transientState)
}

export const setSelectedVeggies = (vegetablesId) => {
    transientState.vegetablesId = vegetablesId
    console.log(transientState)
}

export const setSelectedSides = (sidesId) => {
    transientState.sidesId = sidesId
    console.log(transientState)
}

export const saveOrder = async () => {
    const postOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders")
    
    const customEvent = new CustomEvent("createNewOder")
    document.dispatchEvent(customEvent)
}