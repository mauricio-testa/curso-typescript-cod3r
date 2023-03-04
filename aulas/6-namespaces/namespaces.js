"use strict";
/**
 * Disponível no typescript
 *
 * O que está no namespace não conflita com o escopo global
 * Precisa do export pra usar fora
 */
var Geometria;
(function (Geometria) {
    let Circulo;
    (function (Circulo) {
        const PI = 3.14;
        Circulo.area = (raio) => {
            return PI * Math.pow(raio, 2);
        };
    })(Circulo = Geometria.Circulo || (Geometria.Circulo = {}));
    let Quadrado;
    (function (Quadrado) {
        Quadrado.area = (largura, altura) => {
            return largura * altura;
        };
        Quadrado.perimetro = (largura, altura) => {
            return (largura * 2) + (altura * 2);
        };
    })(Quadrado = Geometria.Quadrado || (Geometria.Quadrado = {}));
})(Geometria || (Geometria = {}));
console.log(Geometria.Circulo.area(39), Geometria.Quadrado.perimetro(30, 40));
// ==> problema dos namespaces: falta de declaração das dependências
// funciona sem importação, namespace pode estar em um arquivo, use em outro e virar bagunça
