# API-NodeJS-RepositoryPattern-Postgree

Exemplo de criação de API em Node.js na arquitetura de camadas utilizando banco de dados Postgree

### Requesitos Necessários 

Instalar o Framework de desenvolvimento. 

```bash
	npm install express
```

Automatizar o processo de reinicialização

```bash
    npm install -g nodemon
```

## Para iniciar o servidor colocar o comando:

```bash
    nodemon index.js
	ou 
    node index.js
```

## Execução Inicial de Endpoints (Postman)

**(1 -Registrar paciente)**
- Enviar POST / Paciente: **http://localhost:3333/paciente**, selecionar Guia Body -> escolher RAW e enviar o seguinte JSON 

   ```json
    { 
            "nome": "Pessoa 1", 
            "email": "email@email.com", 
            "telefone": "(99)99999-9999", 
            "endereco": "Rua endereço 1"
    }
   ```

**(2 -Alterar paciente)**
- Enviar POST / Paciente: **http://localhost:3333/paciente**, selecionar Guia Body -> escolher RAW e enviar o seguinte JSON 

  ```json
    { 
            "pacienteId": 1, 
            "nome": "Pessoa 1 Alterado", 
            "email": "email@email.com", 
            "telefone": "(99)99999-9999", 
            "endereco": "Rua endereco 1"
    }
  ```

**(3 -Registrar sessão)**
- Enviar POST / Paciente: **http://localhost:3333/sessao**, selecionar Guia Body -> escolher RAW e enviar o seguinte JSON 


   ```json
    { 
            "pacienteId": 1,
            "data": "2028-04-22 13:30:00",
            "observacao": "Paciente está com sessão agendada",
            "valor": 150.50,
            "inPago": false
    }
  ```

**(4 -Alterar sessão)**
- Enviar POST / Paciente: **http://localhost:3333/sessao**, selecionar Guia Body -> escolher RAW e enviar o seguinte JSON 

```json
    { 
            "sessaoId": 1,
            "data": "2028-04-22 13:30:00",
            "observacao": "Paciente está com sessão agendada",
            "valor": 104.50,
            "inPago": false
    }
```

### Rotas dos métodos

```bash
	Metodo: POST /paciente
	Metodo: PUT /paciente
	Metodo: DELETE /paciente/1
    Metodo: GET /paciente
	Metodo: GET /paciente/likeNome?nome="Pessoa 1"
	Metodo: POST /sessao
	Metodo: PUT /sessao
	Metodo: DELETE /sessao/1
	Metodo: GET /sessao/1
	Metodo: GET /sessao
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
