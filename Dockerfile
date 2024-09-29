
# Use uma imagem base com o Node.js
FROM node:latest

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json para instalar as dependências primeiro
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie os arquivos da aplicação para o diretório de trabalho
COPY . .

# Compilar o projeto React
RUN npm run build

# Etapa 2: Servir o projeto com o servidor Nginx
FROM nginx:stable-alpine

# Cópia dos arquivos estáticos do build do React para o diretório padrão do nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponha a porta em que a aplicação irá rodar (ex.: 8080)
EXPOSE 80

# Comando para iniciar o servidor da aplicação
CMD ["nginx", "-g", daemon off;"]
