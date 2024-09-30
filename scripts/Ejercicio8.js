function getData(e){
    let id= e.getAttribute('id');
    let dataId= e.getAttribute('data-id');
    let dialCode=e.getAttribute('dial-code');


let template= `
    Elemento seleccionado:
    ID : ${id}
    ISO-ID: ${dataId}
    Dial-Code: ${dialCode}
`

    alert(template);
}
