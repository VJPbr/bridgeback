## Desafio Laboratório Bridge
Esse projeto foi criado para realizar a parte de back-end do desafio.

## Sobre o projeto

O projeto consiste em um servidor onde é possível receber dois números e gerar uma lista de números primos entre eles, e então, retornar a aplicação.
Também é gerado um histórico, o qual pode ser apagado pelo cliente na aplicação.

No projeto foi utilizado o node, junto com as ferramentas cors, knex e sqlite.

## Execução do projeto

### Clone do projeto:

```bash
$ git clone https://github.com/VJPbr/bridgeback
```

### Instalar as dependências:

```bash
$ yarn install
```

### Iniciar o banco de dados:

```bash
$ yarn knex:migrate   
```

### Iniciar o projeto:

```bash
$ yarn start
```

Para iniciar na URL (http://localhost:3333)
