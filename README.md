# PET FAMILY - Gestão de cuidados da famíla Pet
O sistema PET FAMILY ajudará os tutores de animais a manter o protocolo de vacinas e medicamentos em dia prevenindo doenças que podem surgir em qualquer fase da vida do animal.


## Como executar em modo de desenvolvimento

Após abrir o terminal:  
### `npm start`

Para visualizar a aplicação no browser:

http://localhost:3000


## Como executar através do Docker

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Navegue até o diretório que contém o Dockerfile no terminal e seus arquivos de aplicação e
Execute **como administrador** o seguinte comando para construir a imagem Docker:

```
docker build -t pets-app .
```

Uma vez criada a imagem, para executar o container basta executar, **como administrador**, seguinte o comando:

```
$ docker run -d -p 8080:80 pets-app
```

Para acessar a aplicação `web`, digite http://localhost:80/# no navegador.


---
### Alguns comandos úteis do Docker:

- `$ docker images`  -> Para *verificar se a imagem foi criada* 

- `$ docker rmi <IMAGE ID>`  -> Para *remover a imagem construida*  

- `$ docker container ls --all`  -> Para *verificar a execução do container*

- `$ docker stop <CONTAINER ID>`  -> Para *parar a execução de um container*  

- `$ docker rm <CONTAINER ID>`  -> Para *remover um container*  

Para mais comandos veja a [documentação Docker](https://docs.docker.com/reference/)