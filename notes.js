(() => {

    const valores = window.location.search;
    console.log(valores);


    const urlParams = new URLSearchParams(valores);

    console.log(urlParams);
    //Accedemos a los valores
    var leng = urlParams.get('leng');

    console.log(leng);

    const titulo = document.querySelector('h1')
    titulo.innerHTML = leng

})()
