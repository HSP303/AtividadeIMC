
function calculo_imc(){

    let forms = document.getElementById('forms');
    let nome = +forms.nome.value;
    let altura = +forms.ialtura.value;
    let peso = +forms.ipeso.value;
    let imc = parseFloat(peso / (altura * altura));

    document.getElementById('result').innerHTML += imc.toFixed(2);

    if (imc >= 40){
        document.getElementById('result2').innerHTML = 'Obesidade Grau 3';
    }
    else if (imc >= 35){
        document.getElementById('result2').innerHTML = 'Obesidade Grau 2';
    }
    else if (imc >= 30){
        document.getElementById('result2').innerHTML = 'Obesidade Grau 1';
    }
    else if (imc >= 25){
        document.getElementById('result2').innerHTML = 'Pré-obesidade';
    }
    else if (imc >= 18.5){
        document.getElementById('result2').innerHTML = 'Peso normal';
    }

    else{
        document.getElementById('result2').innerHTML = 'Abaixo do peso';
    }
    
}
