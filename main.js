'use strict'

let sdk = new window.sfdc.BlockSDK(); //initalize SDK
let defaultContent = `<h1>This is the defualt content</h1>`

let saveData = () => {
    console.log('Saving data...');
    sdk.setData(newData, (updatedData) => {
        let content = `Content to change`;

        sdk.setContent(content);
    });
}

let fetchData = () => {
    console.log('Loading data...');
    sdk.getData((data) => {
        if (Object.keys(data).length > 0) {

            // console.log('Found data!');
        }
    });
}

sdk.setSuperContent(defaultContent, (newSuperContent) => {});

// Event Handlers
window.onload = fetchData;
window.onchange = saveData;