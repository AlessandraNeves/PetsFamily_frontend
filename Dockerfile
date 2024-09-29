
# ETAPA 1: Geração da versão estática
# Use uma imagem base com o Node.js
FROM node:16 AS build

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json para instalar as dependências primeiro
COPY package*.json ./

# Limpe o cache e instale as dependências
RUN npm cache clean --force && npm install

# Copie os arquivos da aplicação para o diretório de trabalho
COPY . .

# Compilar o projeto React
RUN npm run build

# ETAPA 2: Servir o projeto
FROM nginx:stable-alpine

# Copie os arquivos estáticos do build do React para o Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponha a porta em que a aplicação irá rodar
EXPOSE 80

# Comando para iniciar o servidor da aplicação
CMD ["nginx", "-g", "daemon off;"]