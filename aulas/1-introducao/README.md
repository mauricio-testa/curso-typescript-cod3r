# Características
* Desenvolvido pela Microsoft
* Recursos novos de desenvolvimento + compatibilidade com browsers antigos (porque é transpilada)

# Recursos
- Tipagem forte
- Interfaces
- Namespaces
- ...

# Inicializar projeto
```js
npm i -g typescript // instala global
tsc -v // ve a versão
tsc init // cria arquivo de configuração do typescript
```

# Como executar
## Opção 1: Shell
1. `tsc hello.ts`
2. `node hello.js`

## Opção 2: Code runner
1. Instalar extensão VS Code "Code Runner"
2. Instalar globalmente o ts-node `npm i -g ts-node`
3. Rodar o arquivo com `CRL + ALT + N`

## Opção 3: Browser
1. Iniciar package.json `npm init -y`
2. Instalar live server `npm i live-server`
3. No package.json
``` json
"scripts": {
   "start": "live-server"
},
```
4. Abrir dois terminais. Em um rodar `npm start` pra deixar rodando o live server (detectar alterações nos arquivos e recarregar o browser) e no outro `tsc -w` pra "watch" todos os arquivos do projeto e quando tiver mudança compilar de ts pra js