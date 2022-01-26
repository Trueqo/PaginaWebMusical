
//activa el nota DO por medio de un click

let DO = document.getElementById("DO");
let btnDO = document.getElementById("btnDO");
btnDO.addEventListener("click",()=>{
    DO.play(); 
});


//activa la nota DO por medio de tecla




//activa el nota DO por medio de un click

let RE = document.getElementById("RE");
let btnRE = document.getElementById("btnRE");
btnRE.addEventListener("click",()=>{
    RE.play();
});

//activa la nota RE por medio de tecla

document.addEventListener("keypress", function(evento){

    let tecla = evento.code
    console.log(tecla)
    if (tecla == "KeyS") {
        RE.play();
    }
})

//activa el nota MI por medio de un click

let MI = document.getElementById("MI");
let btnMI = document.getElementById("btnMI");
btnMI.addEventListener("click",()=>{
    MI.play();
});


//activa la nota MI por medio de tecla

document.addEventListener("keypress", function(evento){

    let tecla = evento.code

    if (tecla == "KeyD") {
        MI.play();
    }
})

//activa el nota FA por medio de un click

let FA = document.getElementById("FA");
let btnFA = document.getElementById("btnFA");
btnFA.addEventListener("click",()=>{
    FA.play();
});

//activa la nota FA por medio de tecla

document.addEventListener("keypress", function(evento){

    let tecla = evento.code
    
    if (tecla == "KeyF") {
        FA.play();
    }
})



//activa la nota SOL por medio del click

let SOL = document.getElementById("SOL");
let btnSOL = document.getElementById("btnSOL");
btnSOL.addEventListener("click",()=>{
    SOL.play();
});

//activa la nota SOL por medio de la tecla

document.addEventListener("keypress", function(evento){

    let tecla = evento.code
    
    if (tecla == "KeyG") {
        SOL.play();
    }
})

//activa la nota LA por medio del click

let LA = document.getElementById("LA");
let btnLA = document.getElementById("btnLA");
btnLA.addEventListener("click",()=>{
    LA.play();
});

//activa la nota LA por medio de la tecla
document.addEventListener("keypress", function(evento){
let tecla = evento.code
    
    if (tecla == "KeyH") {
        LA.play();
    }
})

//activa la nota SI por medio del click

let SI = document.getElementById("SI");
let btnSI = document.getElementById("btnSI");
btnSI.addEventListener("click",()=>{
    SI.play();
});

//activa la nota SI por medio de la tecla
document.addEventListener("keypress", function(evento){
let tecla = evento.code
    
    if (tecla == "KeyJ") {
        SI.play();
    }
})


//funcion para animar todas las teclas

document.addEventListener("keypress", function(evento){

    let tecla = evento.code
    
    if (tecla == "KeyA") {
        DO.play();
        if(btnDO.classList[btnDO.classList.length-1]!=='active'){
            btnDO.classList.toggle('active')
        }
            

    }
})

document.addEventListener("keyup", function(evento){

    let tecla = evento.code
    
    if (tecla == "KeyA") {

        btnDO.classList.toggle('active')
        
    }
})
