
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

# Exponha a porta em que a aplicação irá rodar (ex.: 8080)
EXPOSE 8080

# Comando para iniciar o servidor da aplicação
CMD ["node", "server.js"]