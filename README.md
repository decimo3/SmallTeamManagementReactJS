# ReactFrontEnd

Projeto para migração da tecnologia RazorPages do repositório

## Dependências

```bash
npm install --save react react-dom
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader
```

* **react:** biblioteca para criação de componentes web reativos e reutilizáveis de maneira mais eficiente e organizada;
* **react-dom:** biblioteca do ReactJS responsável pela integração desses componentes ReacJS na árvore do DOM da página;
* **@babel/core:** núcleo do transpilador do BabelJS necessário para executar a transformação configuradas pelas extensões;
* **@babel/preset-env:** extensão do BabelJS que transforma o código Javascript moderno em Javascript compatível;
* **@babel/preset-react:** extensão do BabelJS que transforma o código do ReactJS JSX em Javascript compatível;
* **@babel/cli (opcional):** extensão do BabelJS que transforma o código via linha de comando
    > Útil para traspilar único arquivo (necessário definir a extensão usada para transformar)
    ```bash
    babel --presets @babel/preset-react script.js
    ```
* **webpack:** núcleo do gerenciador do webpack necessário para executar os pipelines configurados no arquivo `webpack.config.js`;
* **webpack-dev-server:** extensão do webpack que inicia o servidor de desenvolvimento que atualiza em tempo real o pipeline;
* **webpack-cli:** extensão do webpack que inicia via linha de comando a execução do pipeline configurado;
* **babel-loader:** extensão do webpack que adiciona o BabelJS no pipeline do webpack; 

## Referências:

* Configuração das dependências do projeto: [Webpack and Babel setup for React from scratch](https://javascript.plainenglish.io/webpack-and-babel-setup-with-react-from-scratch-bef0fe2ae3e7)
* Descrições das bibliotecas usadas no projeto: [ChatGPT@3.5](https://chat.openai.com/share/ce50e174-1a46-4761-9a0f-b4d2b69a3a44)
* Detalhes das extensões das bibliotecas [BabelJS](https://babeljs.io/) e [Webpack](https://webpack.js.org/concepts/) nas respectivas documentações