    var titulo = document.querySelector(".titulo");
    titulo.textContent = "Aparecida Nutricionista";

    var pacientes = document.querySelectorAll(".paciente");

    for (var i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i];
        

        var tdPeso= paciente.querySelector ('.info-peso');
        var peso = tdPeso.textContent;

        var tdAltura = paciente.querySelector('.info-altura');
        var altura = tdAltura.textContent;

        var tdImc = paciente.querySelector ('.info-imc');

        var pesoEhvalido = true;
        var alturaEhvalida = true;

        if (peso < 0 || peso >= 1000){
            pesoEhvalido = false;
            tdImc.textContent= "Peso invalido";
            paciente.classList.add('paciente-invalido')
        }

        if(altura <= 0 || altura >=3.0 ){
            alturaEhvalida =  false;
            tdImc.textContent= "Altura invalida";
            paciente.classList.add('paciente-invalido')
        }
        if (  alturaEhvalida && pesoEhvalido ){
            
        var imc = calcularImc (peso, altura);
            tdImc.textContent = imc;
        }
    }
    
    function calcularImc(peso,altura){
        var imc = 0;
        imc = peso / (altura * altura);

        return imc.toFixed(2);
    }
