/**
 * Disponível no typescript
 * 
 * O que está no namespace não conflita com o escopo global
 * Precisa do export pra usar fora
 */

namespace Geometria {

	export namespace Circulo {
		const PI = 3.14
		export const area = (raio: number): number => {
			return PI * Math.pow(raio, 2)
		}
	}
	
	export namespace Quadrado {
		export const area = (largura: number, altura: number): number => {
			return largura * altura
		}

		export const perimetro = (largura: number, altura: number): number => {
			return (largura * 2) + (altura * 2)
		}
	}
	
}

console.log(Geometria.Circulo.area(39), Geometria.Quadrado.perimetro(30, 40))

// ==> problema dos namespaces: falta de declaração das dependências
// funciona sem importação, namespace pode estar em um arquivo, use em outro e virar bagunça