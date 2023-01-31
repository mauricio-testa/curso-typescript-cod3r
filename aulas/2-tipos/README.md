# Dica
Comparar o código escrito em typescript com o código javascript gerado

# Tipos
```ts
// numero
let numero: number = 20
// string
let texto: string = 'Lorem ipsum'
// booleano
let boleano: boolean = false
// qualquer tipo
let qualquerCoisa: any = 'Qualquer coisa aqui'
// union types (vários tipos mas não todos)
let estaAtivo: boolean|number = 1
// nulo
let nulo: null = null
// enum
enum Sexo {
	Masculino = 'M',
	Feminino = 'F'
}
let sexoEnum: Sexo = Sexo.Feminino
// array
let arrayDeNumeros: number[] = [1, 20, 30.6]
let arrayDeStrings: string[] = ['Teste', 'Texto']
let arrayDeQualquerCoisa: any[] = [1, 'Teste', false, Sexo.Masculino]
// tupla
let tupla: [string, number, Sexo] = ['Mauricio Testa', 25, Sexo.Masculino]
// função
let funcaoTipada = (nome: string, idade: number) : string => `${nome} tem ${idade} anos`
let funcaoSemRetorno = () : void => console.log('Oii')
// objeto
let objetoPessoa: { nome: string, idade: number } = { nome: 'Mauricio', idade: 26}
// tipo personalizado
type Carro = { marca: string, ano: number}
let carro1: Carro = { marca: 'VW', ano: 2011}
let carro2: Carro = { marca: 'Fiat', ano: 1998}
```