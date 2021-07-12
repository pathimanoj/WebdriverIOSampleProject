export const click = async (element) => {
    await (await element).waitForClickable()
    await (await element).click()
}

export const isElementDisplayed = async (element) => {
    return (await element).isDisplayed()
}

export const enterText = async (element, value) => {
    await (await element).setValue(value)
}

export const selectByText = async (element, value) => {
    await (await element).selectByVisibleText(value)
}

export const selectByAttribute = async (elements, value) => {
    const element = await elements;
    for (let i = 0; i < element.length; i++) {
        if (await element[i].getAttribute('value') === value) {
            await element[i].click()
            break;
        }
    }
}

export const getListFromWebelements = async (elements) => {
    const list = [];
    (await elements).forEach(async (element) => { list.push(await element.getText()) })
    return list;
}