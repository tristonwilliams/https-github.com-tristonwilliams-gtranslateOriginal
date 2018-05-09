'use strict'

let sdk = new window.sfdc.BlockSDK(); //initalize SDK
let defaultContent = `<h1>This is the defualt content</h1>`;

let data = {
    text: '',
    from: 'auto',
    to: 'en'
};

let saveData = () => {
    console.log('Saving data...');


    let textMessage = document.getElementById('textMessage').value;
    let fromLang = document.getElementById('fromLang').value;
    let toLang = document.getElementById('toLang').value;

    let xhttp = new XMLHttpRequest();

    xhttp.open('POST', '/translate', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(`text=${textMessage}&from=${fromLang}&to=${toLang}`);

    xhttp.onreadystatechange = () => {
        console.log('response -> ' + xhttp.responseText);
        document.getElementById('t1').innerText = xhttp.responseText;
    }

    // sdk.setData(newData, (updatedData) => {
    //     let content = `Content to change`;

    //     sdk.setContent(content);
    // });
}

let fetchData = () => {
    console.log('Loading data...');


    sdk.getData((data) => {
        if (Object.keys(data).length > 0) {

            // console.log('Found data!');
        }
    });


}

// sdk.setSuperContent(defaultContent, (newSuperContent) => {});

// Event Handlers
window.onload = fetchData;
window.onchange = saveData;