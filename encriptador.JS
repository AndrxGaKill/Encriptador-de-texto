function encriptarTexto(texto, desplazamiento) {
    let textoEncriptado = '';
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        if (caracter.match(/[a-z]/i)) {
            let codigoAscii = texto.charCodeAt(i);
            if (codigoAscii >= 65 && codigoAscii <= 90) {
                caracter = String.fromCharCode(((codigoAscii - 65 + desplazamiento) % 26) + 65);
            }
            else if (codigoAscii >= 97 && codigoAscii <= 122) {
                caracter = String.fromCharCode(((codigoAscii - 97 + desplazamiento) % 26) + 97);
            }
        }
        textoEncriptado += caracter;
    }
    return textoEncriptado;
}

function desencriptarTexto(textoEncriptado, desplazamiento) {
    return encriptarTexto(textoEncriptado, 26 - desplazamiento);
}

function encriptar() {
    let texto = document.getElementById('texto').value;
    let desplazamiento = parseInt(document.getElementById('desplazamiento').value);
    let resultado = encriptarTexto(texto, desplazamiento);
    document.getElementById('resultado').textContent = "Texto encriptado: " + resultado;
}

function desencriptar() {
    let textoEncriptado = document.getElementById('texto').value;
    let desplazamiento = parseInt(document.getElementById('desplazamiento').value);
    let resultado = desencriptarTexto(textoEncriptado, desplazamiento);
    document.getElementById('resultado').textContent = "Texto desencriptado: " + resultado;
}