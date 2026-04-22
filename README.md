# App-Massoterapeuta-Node-React

Exemplo de criação de aplicativo de agendamento de sessões de massoterapia em NodeJS e React com banco de dados Postgree. 

## O que voçê vai ver nesse Projeto 

#### React
- **react-router-dom** - Biblioteca padrão React para gerenciar navegação e roteamento em aplicações web Single Page Applications, permitindo que o usuário navegue entre diferentes "telas" sem recarregar a página inteira 
- **moment** - Manipulação e formatação de exibição de datas e horas, facilitando o desenvolvimento de interfaces interativas.
- **react-hook-form** - Simplifica a validação, coleta de dados e manipulação de estado. Sua principal competência é reduzir a necessidade de componentes controlados (useState)
- **pdfmake** - Biblioteca JavaScript para geração de documentos PDF
- **react-router** - Biblioteca padrão e mais utilizada para gerenciar navegação e roteamento em aplicações.
- **react-table** - Biblioteca headless poderosa para construção de tabelas altamente customizáveis.

#### Node.js
- **Express JSON** -É um middleware embutido responsável por analisar (parsear) corpos de requisições HTTP recebidas que contenham dados no formato JSON. 
- **Express Router** - Reponsável por criar manipuladores de rotas modulares e montáveis. 
- **Sequelize** - Mapeador objeto-relacional (ORM) permite que manipular dados usando objetos e métodos JavaScript, eliminando a necessidade de escrever queries SQL

## Requisitos e Detalhe do uso Frontend (React)

Recuperar o Framework de desenvolvimento anterior. 

```bash
	npm install --legacy-peer-deps
```

Para iniciar o servidor colocar o comando:

```bash
	yarn start  
```

## Requisitos e Detalhe do uso Backend (Node.js)

Instalar o Framework de desenvolvimento. 

```bash
	npm install express
```

Automatizar o processo de reinicialização

```bash
    npm install -g nodemon
```

Para iniciar o servidor colocar o comando:

```bash
    nodemon index.js
ou 
    node index.js
```

## Modo de executar o Projeto:

Necessários abrir duas instâncias do VSCode: 

```bash
VSCode 
|------| Backend
       |------ API Start / (http://localhost:3333/)
VSCode
|------| Frontend
       |------ App Init / (http://localhost:3000/)
```

### String de conexão do banco

Modifique a string de conexão no arquivo **db.js**, no trecho indicado:

```bash
...
        const sequelize = new Sequelize('SEUBANCO', 'postgres', 'SUASENHA', {
        host: 'localhost',
        dialect: 'postgres',
        define: {
            timestamps: false,
            },
...

```

O script para criação da tabela do exemplo encontra-se na pasta **Database**.

#### Aqui está uma demonstração do Projeto

<img width="1316" height="607" alt="App-Massoterapeuta-Node-React" src="https://github.com/user-attachments/assets/051fda55-b9c6-46da-8d01-33012383f17e" />
