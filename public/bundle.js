(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let hello = () => {
    console.log('Hello!');

}

module.exports = hello;
},{}],2:[function(require,module,exports){
'use strict'

let h = require('./editor');

h.hello();

let sdk = new window.sfdc.BlockSDK(); //initalize SDK
let defaultContent = `<h1>This is the defualt content</h1>`;

let data = {
    textMessage: 'Hello world!',
    fromLang: 'auto',
    toLang: 'auto'
};

let saveData = () => {
    // console.log('Saving data...');

    data.textMessage = document.getElementById('textMessage').value;
    data.fromLang = document.getElementById('fromLang').value;
    data.toLang = document.getElementById('toLang').value;

    let xhttp = new XMLHttpRequest();

    xhttp.open('POST', '/translate', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(`text=${data.textMessage}&from=${data.fromLang}&to=${data.toLang}`);

    xhttp.onreadystatechange = () => {
        // console.log('response -> ' + xhttp.responseText);
        // document.getElementById('t1').innerText = xhttp.responseText;

        sdk.setData(data, (updatedData) => {
            let content = xhttp.responseText;
            sdk.setContent(content);
        });
    }

}

let fetchData = () => {
    // console.log('Loading data...');

    sdk.getData((dataCB) => {
        if (Object.keys(dataCB).length > 0) {
            data = dataCB;

            document.getElementById('textMessage').value = data.textMessage;
            document.getElementById('fromLang').value = data.fromLang;
            document.getElementById('toLang').value = data.toLang;

            // console.log('Found data!');
        }


    });


}


let quill = new Quill('#editor-container', {
    modules: {
        toolbar: [
            [{
                header: [1, 2, false]
            }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block']
        ]
    },
    placeholder: 'Compose an epic...',
    theme: 'snow' // or 'bubble'
});

// Event Handlers
window.onload = fetchData;
window.onchange = saveData;
},{"./editor":1}]},{},[2]);
