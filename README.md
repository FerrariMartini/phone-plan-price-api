# Getting Started

### Atention: The project was built with NodeJS v15.10.

Step 01: You must setup your own Postgres database in your local/personal machine.

Step 02: Insert credencials of your db into `ormconfig.json` file.

Step 03: You must run migrations to create tables into your postgres following the commands below:

- `npm run typeorm migration:run` => it will create tables.
- `npm run typeorm migration:revert` => it will drop tables.

Step 04: The command `npm i` will install all dependency of the project, and `npm run dev` will run it.
You can see on the terminal the msg SERVER UP and port 3333.

# Unit test using Jest:
webiste: [https://jestjs.io/docs/getting-started]

Step 01: To run test you should execute commanding `npm test`

The result of tests is going to be into the `coverage` (file) in the root of the project this path `123call_api/coverage/index.html`.

# Main resource used

- Express
- Typeorm
- TypeScript
- ESLint, Prettier e EditorConfig
- Jest
- TSyringe

# Iniciando o projeto

### Atenção: Foi usado no NodeJS v15.10.

Passo 01: Você deverá configurar um banco de dados Postgres em seu ambiente local. Veja no arquivo `ormconfig.json` as configurações padrões do banco e database.

Passo 02: Depois você deverá rodas as migrations para criação das tabelas, ver os comandos abaixo:

- `npm run typeorm migration:run` => criar as tabelas,
- `npm run typeorm migration:revert` => dropar as tabelas caso seja necessario,

Passo 03: Para iniciar a vxtel_api vc deverá dar o comando `npm run dev` no seu terminal. Você deverá estar dentro da pasta vxtel_api para que o comando funcione.

Esse comando ira popular as tables do banco com os dados necessários e “subir” o servidor na porta 3333.

# Teste com Jest https://jestjs.io/docs/getting-started

Passo 01: Para executar os teste você deverá dar o comando `npm test`.

O resultado gerado da cobertura do teste no arquivo index.html dentro da pasta coverage na raiz do projeto (vxtel_api/coverage/index.html) após a execução do comando.

# Principais recursos utilizados

- Express: Framework para aplicações web para Node.js,
- Typeorm: ORM para abstrair o uso banco Postgres,
- TypeScript: https://www.typescriptlang.org/,
- ESLint, Prettier e EditorConfig: Como padrões de projeto,
- Jest: Para testes unitarios,
- TSyringe: Lib para injeção de dependencia,
