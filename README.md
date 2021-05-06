# Getting Started

### Atenção: Foi usado no NodeJS v15.10.

Passo 01: Você deverá configurar um banco de dados Postgres em seu ambiente local. Veja no arquivo ormconfig.json as configurações padrões do banco e database.

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
