function inicio(){
    document.getElementById("result").style.display = "none";
}

function calcularCirculo(){
    var raio = document.getElementById("raio").value
    var resultado = document.getElementById("resultado")

    var area = 3.1415 * (raio*raio);

    document.getElementById("result").style.display = "block";
    resultado.value = area;
}

function calcularQuadrado(){
    var lado = document.getElementById("lado").value
    var resultado = document.getElementById("resultado")

    var area = (lado*lado);

    document.getElementById("result").style.display = "block";
    resultado.value = area;
}

function calcularTriangulo(){
    var base = document.getElementById("base").value
    var altura = document.getElementById("altura").value
    var resultado = document.getElementById("resultado")

    var area = (base*altura/2);

    document.getElementById("result").style.display = "block";
    resultado.value = area;
}

function calcularRetangulo(){
    var base = document.getElementById("base").value
    var altura = document.getElementById("altura").value
    var resultado = document.getElementById("resultado")

    var area = (base*altura);

    document.getElementById("result").style.display = "block";
    resultado.value = area;
}

function calcularTrapezio(){
    var baseMaior = document.getElementById("baseMaior").value
    var baseMenor = document.getElementById("baseMenor").value
    var altura = document.getElementById("altura").value
    var resultado = document.getElementById("resultado")

    if(baseMaior < baseMenor){
        alert("Impossível Realizar o Cálculo\nA Base Menor tem o valor superior a Base Maior.")
    } else{
        var area = ((parseFloat(baseMaior)+parseFloat(baseMenor)) * parseFloat(altura)) / 2;

        document.getElementById("result").style.display = "block";
        resultado.value = area;
    }
}

function calcularLosango(){
    var DMaior = document.getElementById("diagMaior").value
    var DMenor = document.getElementById("diagMenor").value
    var resultado = document.getElementById("resultado")

    if (DMaior < DMenor){
        alert("Impossível Realizar o Cálculo\nA Diagonal Menor tem o valor superior a Diagonal Maior.")
    } else {
    var area = (DMaior*DMenor) / 2;

    document.getElementById("result").style.display = "block";
    resultado.value = area;
    }
}