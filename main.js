(() => {

    'use strict'
    function error(err) {
        console.log('Solicitud fallida', err)
    }

    function searchTopics() {
        var xhr = new XMLHttpRequest()
        xhr.onerror = error
        xhr.onload = loadTopics
        xhr.open('GET', 'http://localhost:3030/api/main/')
        xhr.send()
    }

    function loadTopics() {
        var datos = JSON.parse(this.responseText)
        console.log(datos)
        for (let clave in datos) {
            //console.log(datos[clave].nombreLenguaje)
            const newElementDiv = document.createElement('div')
            const newElementH3 = document.createElement('h3')
            const newElementA = document.createElement('a')
            /** */
            newElementA.innerHTML = datos[clave].nombreLenguaje
            newElementA.setAttribute('href', `notes.html?leng=${datos[clave].nombreLenguaje}`)
            newElementH3.appendChild(newElementA)
            newElementDiv.appendChild(newElementH3)
            newElementDiv.setAttribute('class', 'box')
            /** */
            const main = document.querySelector('main')
            main.appendChild(newElementDiv)
        }
    }
    searchTopics()
})()

/** Modal */

var modal = document.querySelector("#ventanaModal")
var botonAdd = document.querySelector("#btnAdd")
var botonEdit = document.querySelector("#btnEdit")
var botonDel = document.querySelector("#btnDel")
var span = document.querySelector(".cerrar")
var tituloModal = document.querySelector(".titulo-modal")
var btnModal = document.querySelector("#btnModal")


botonAdd.addEventListener("click", function () {
    tituloModal.innerHTML = "Nuevo Titulo"
    modal.style.display = "block"
    btnModal.className = ''
    btnModal.classList.add("submitAdd")

})

botonEdit.addEventListener("click", function () {
    tituloModal.innerHTML = "Editar Titulo"
    modal.style.display = "block"
    btnModal.className = ''
    btnModal.classList.add("submitEdit")
})

botonDel.addEventListener("click", function () {
    tituloModal.innerHTML = "Eliminar Titulo"
    modal.style.display = "block"
    btnModal.className = ''
    btnModal.classList.add("submitDel")
})

span.addEventListener("click", function () {
    modal.style.display = "none"
})

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
})

/** Crud */
const add = async (data) => {
    console.log(data)
    const url = 'http://localhost:3030/api/main/'
    const params = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: {
            "nombreLenguaje": JSON.stringify(data)
        },
        mode: 'no-cors'
    }
    const prom = await fetch(url, params)
    console.log(prom)
}

btnModal.addEventListener('click', () => {
    const inputTitulo = document.querySelector('.input-titulo')
    const data = inputTitulo.value;

    let classModal
    if (btnModal.classList) {
        classModal = btnModal.classList[0]
    }

    if (classModal === 'submitAdd') {
        add(data)
    }
    if (classModal === 'submitEdit') {
        console.log('en if', classModal)
    }
    if (classModal === 'submitDel') {
        console.log('en if', classModal)
    }


})