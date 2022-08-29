// trabajo practico simulador: convertidor de moneda

//en nuestro parseInt tenemos que ingresar la palabra valor, la mism que pusimos en el id del formulario del index.html, donde dice la cifra que podemos poner de 1 a 100000. la palabra valuees para verifique los valores que puse en el 
    function convertir() {
        let valor = parseInt(document.getElementById("valor").value);
        let resultado = 0;
        let dolar = 287;
        let euro = 295;
// en este caso pondremos la palabra "uno" que es la que pusimos en el id del index.html
        if (document.getElementById("uno").checked) {
            resultado = valor / dolar;
            alert("el cambio de pesos a dolares es: $ " + resultado.toFixed[2]);//tofixed es para darle la cantidad de decimales
        } else if (document.getElementById("dos").checked) {
            resultado = valor / euro;
            alert("el cambio de pesos a euro es: " + resultado.tofixed[2]);

        } else {
            alert("tienes que completar los campor requeridos")
        }
    }


// llamamos la funcion desde el index.html