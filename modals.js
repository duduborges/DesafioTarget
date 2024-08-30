// Criei esse arquivo para ficar mais organizado!!

const closeModal = document.getElementById("close")
closeModal.addEventListener("click", function () {
    if (desafio1) {
        desafio1.classList.remove("openDesafio1");
        desafio1.classList.add("desafio1");
    }
})

const closeModal2 = document.getElementById("close2")
closeModal2.addEventListener("click", function () {
    if (desafio2) {
        desafio2.classList.remove("openDesafio2");
        desafio2.classList.add("desafio2");
    }
})

const closeModal3 = document.getElementById("close3")
closeModal3.addEventListener("click", function () {
    if (desafio3) {
        desafio3.classList.remove("openDesafio3");
        desafio3.classList.add("desafio3");
    }
})

const closeModal4 = document.getElementById("close4")
closeModal4.addEventListener("click", function () {
    if (desafio4) {
        desafio4.classList.remove("openDesafio4");
        desafio4.classList.add("desafio4");
    }
})

const closeModal5 = document.getElementById("close5")
closeModal5.addEventListener("click", function () {
    if (desafio5) {
        desafio5.classList.remove("openDesafio5");
        desafio5.classList.add("desafio5");
    }
})


const desafio1 = document.querySelector(".desafio1")
const open1 = document.querySelector(" .openDesafio1")
function OpenDesafio1() {
    if (desafio1) {
        desafio1.classList.add("openDesafio1");
        desafio1.classList.remove("desafio1");
    }
}
const desafio2 = document.querySelector(".desafio2")
const open2 = document.querySelector(" .openDesafio2")

function OpenDesafio2() {
    if (desafio2) {
        desafio2.classList.add("openDesafio2");
        desafio2.classList.remove("desafio2");
    }
}



const desafio3 = document.querySelector(".desafio3")
const open3 = document.querySelector(" .openDesafio3")
function OpenDesafio3() {
    if (desafio3) {
        desafio3.classList.add("openDesafio3");
        desafio3.classList.remove("desafio3");
    }
}

const desafio4 = document.querySelector(".desafio4")
const open4 = document.querySelector(" .openDesafio4")
function OpenDesafio4() {
    if (desafio4) {
        desafio4.classList.add("openDesafio4");
        desafio4.classList.remove("desafio4");
    }
}

const desafio5 = document.querySelector(".desafio5")
const open5 = document.querySelector(" .openDesafio5")
function OpenDesafio5() {
    if (desafio5) {
        desafio5.classList.add("openDesafio5");
        desafio5.classList.remove("desafio5");
    }
}