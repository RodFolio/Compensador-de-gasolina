function calcular(event){
    event.preventDefault();
    let alcoolInput = document.getElementById('alcool').value;
    let gasolinaInput = document.getElementById('gasolina').value;
    let contentresult = document.getElementById('content-result');
    let textresult = document.getElementById('text');

    let gasolinaSpan = document.getElementById('gasolinaresult');
    let alcoolSpan = document.getElementById('alcoolresult');
    
    let calculo = (alcoolInput / gasolinaInput);

    if(calculo < 0.7){
       textresult.innerHTML = "É melhor abastecer com Álcool";
    }else{
        textresult.innerHTML = "É melhor abastecer com Gasolina";
    }

    gasolinaSpan.innerHTML = 'Gasolina: R$' + gasolinaInput;
    alcoolSpan.innerHTML = 'Álcool: R$' + alcoolInput;



    contentresult.classList.remove('hide');


}