# O que é?
Um servidor criado em Node.js utilizando o framework Express. Foi criado para ser uma API fake que utiliza headers de autenticação e geração de token.

# Instalação
É necessário ter o Node.js instalado na máquina. Caso não possua, pode fazer o download em [https://nodejs.org/en/download/](https://nodejs.org/en/download/).

Após isso, basta fazer o download do projeto. Pode utilizar tanto a opção de baixar zipado aqui pelo github como também fazer um clone do projeto com o git.

# Utilização
Após ter o Node.js instalado e ter o projeto na sua máquina local, abrir um terminal/cmd dentro do projeto e executar o comando `npm install` ou `yarn install`. Terminado a instalação das dependências, executar o comando `npm run start` our `yarn start` para o servidor ser iniciado na porta 3000.

# Rotas
As duas rotas existentes no projeto são GET.

A primeira rota que deve ser acessada é `/oauth/access-token` com um header `Authorization` contendo o valor `Basic auth`.
Vai retornar status 200 e uma chave.

A segunda rota que deve ser acessada é `/products` e que também necessita de um header `Authorization`, porém o valor deve ser o valor retornado pela rota anterior.