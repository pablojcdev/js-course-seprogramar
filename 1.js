function estaEntre (numero1, numero2, numero3) {
    if (numero1 > numero2 && numero1 < numero3) {
        return true;
    } else {
        return false;
    }
}

function estaFueraDeRango (numero1, numero2, numero3) {
    if (numero1 < numero2 || numero1 > numero3) {
        return true;
    } else {
        return false;
    }
}

///////////////////////////

function esFinDeSemana (dia) {
    return dia === "sábado" || dia === "domingo"
}

///////////////////////////

function signo (numero) {
    if (numero > 0) {
        return 1;
    } else if (numero < 0) {
        return -1;
    } else {
        return 0;
    }
}

///////////////////////////

function esNumeroDeLaSuerte (numero) {
    return numero > 0 && numero < 100 && numero !== 15;
}

///////////////////////////

function medallaSegunPuesto (puesto) {
    if (puesto === 1) {
        return "oro";
    } else if (puesto === 2) {
        return "plata";
    } else if (puesto == 3) {
        return "bronce";
    } else
        return "nada";
}

// La funcion debería usar los operadores de equivalencia === y !== en lugar de los operadores de similitud == y !=

/////////////////////////// 2.2.1

function cuantoCuesta (monitor, memoria) {
    return monitor * 60 + memoria * 200 + 1000
}

/////////////////////////// 2.2.2

function meConviene (monitor, memoria) {
    return monitor >= 32 && memoria >= 8 && cuantoCuesta(monitor, memoria) < 6000
}

/////////////////////////// 2.2.3

function perimetroTriangulo (lado1, lado2, lado3) {
    return lado1 + lado2 + lado3
}

function areaTriangulo (base, altura) {
    return base * altura / 2
}

/////////////////////////// 2.2.4

function perimetroCuadrado (lado) {
    return lado * 4
}

function areaCuadrado (lado) {
    return lado * lado
}

/////////////////////////// 2.2.5

function estaAfinado (lacentral) {
    return lacentral === 440
}

/////////////////////////// 2.2.6

function estaCerca (lacentral) {
    return lacentral >= 437 && lacentral <= 443 && lacentral !== 440
}

/////////////////////////// 2.2.7

function escribirCartelito (titulo, nombre, apellido) {
    return titulo + " " + nombre + " " + apellido
}

/////////////////////////// 2.2.8

function escribirCartelito (titulo, nombre, apellido, corto) {
    if (corto) {
        return titulo + " " + apellido
    } else
        return titulo + " " + nombre + " " + apellido
}

// Si vos pusieras solamente if (b), como "b" va a corresponderse con el valor de un booleano, si este fuese "True" ingresarías al if porque la condición sería "verdadera"

/////////////////////////// 2.2.9 ERRADO - ERRADO - ERRADO - ERRADO - ERRADO - ERRADO - ERRADO - ERRADO - ERRADO

function escribirCartelitoOptimo (titulo, nombre, apellido) {
    return (longitud(nombre + apellido > 15) && escribirCartelito(titulo, nombre, apellido, true))
}

/////////////////////////// 2.2.10 

function decisionConMoneda (decision, op1, op2) {
    if (decision === "cara") {
        return op1
    } else if (decision === "ceca") {
        return op2
    }
}

/////////////////////////// 2.2.11

function valorEnvido (numero) {
    if (numero <= 7) {
    return numero
    } else if (numero >= 10) {
    return 0
    }
}

/////////////////////////// 2.2.12

function puntosDeEnvidoTotales (num1, palo1, num2, palo2) {
    if (palo1 === palo2) {
        return valorEnvido(num1) + valorEnvido(num2) + 20;
    } else (palo1 !== palo2)
        return Math.max(valorEnvido(num1), valorEnvido(num2));
}

/////////////////////////// 2.2.13

function valorCantoTruco (canto) {
    if (canto === "truco") {
        return 2;
    } else if (canto === "retruco") {
        return 3;
    } else {
        return 4;
    }
}

/////////////////////////// 2.2.13