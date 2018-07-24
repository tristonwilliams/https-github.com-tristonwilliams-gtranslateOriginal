'use strict'

let sdk = new window.sfdc.BlockSDK(); //initalize SDK
let defaultContent = `<h1>This is the defualt content</h1>`;

let data = {
    editor: 'Hello world!',
    fromLang: 'auto',
    toLang: 'auto',
	styled:  ''
};

 
	//var quill = new Quill('#editor', {
	  //theme: 'snow'
	//});


	


let saveData = () => {
    // console.log('Saving data...');

    var text = document.getElementById('editor')
    
	
	data.editor = text.textContent;
	    //data.styled = quill.root.innerHTML
	   
    data.fromLang = document.getElementById('fromLang').value;
    data.toLang = document.getElementById('toLang').value;

    let xhttp = new XMLHttpRequest();
alert(data.editor);
    xhttp.open('POST', '/translate', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(`text=${data.editor}&from=${data.fromLang}&to=${data.toLang}`);

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

//quill.root.innerHTML = data.styled;
            document.getElementById('fromLang').value = data.fromLang;
            document.getElementById('toLang').value = data.toLang;

            // console.log('Found data!');
        }


    });


}

// sdk.setSuperContent(defaultContent, (newSuperContent) => {});

// Event Handlers
window.onload = fetchData;
window.onchange = saveData;
