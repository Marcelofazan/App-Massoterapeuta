# App-Massoterapeuta-Node-React

Exemplo de criação de aplicativo de agendamento de sessões de massoterapia em NodeJS e React com banco de dados Postgree. 

## Frontend Requisitos necessários 

Recuperar o Framework de desenvolvimento anterior. 

```bash
	npm install --legacy-peer-deps
```

Para iniciar o servidor colocar o comando:

```bash
	yarn start  
```

## Backend Requisitos necessários 

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

Necessários duas instâncias do VSCode abertas: 

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
