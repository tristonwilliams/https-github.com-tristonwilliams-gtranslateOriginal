const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],
    [{
        'align': []
    }],
    [{
        'header': 1
    }, {
        'header': 2
    }], // custom button values
    [{
        'list': 'ordered'
    }, {
        'list': 'bullet'
    }],

    [{
        'indent': '-1'
    }, {
        'indent': '+1'
    }], // outdent/indent
    [{
        'direction': 'rtl'
    }], // text direction
    [{
        'header': [1, 2, 3, 4, 5, 6, false]
    }],
    [{
        'color': []
    }, {
        'background': []
    }], // dropdown with defaults from theme
    [{
        'font': []
    }]


    ['clean'] // remove formatting button
];

let quill = new Quill('#editor-container', {
    modules: {
        toolbar: toolbarOptions
    },
    placeholder: 'Compose an epic...',
    theme: 'snow' // or 'bubble'
});

let getHtmlText = () => {
    return quill.root.innerHTML;
}

let setHtmlText = (htmlText) => {
    quill.root.innerHTML = htmlText;
}