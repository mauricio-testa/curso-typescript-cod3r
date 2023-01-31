## "noEmitOnError": true,
Não compila caso haja algum erro de Typescript

## target": "es2016",
Nível de compatibilidade do javascript gerado

## "sourceMap": true,
Tem acesso ao arquivo original no console

## "noUnusedLocals": true
Variáveis locais dentro da função que não são usadas

## "noUnusedParameters": true
Parâmetros de funções que não são usados

## Gerar um arquivo só
* Mudar `"module": "commonjs"` para `"module": "system", `
* Mudar `"outFile": "./build/app.js"`