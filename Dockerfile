# Usa una imagen base con Node.js
FROM node:20.11.0-alpine3.19

# Define el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Habilita corepack
RUN corepack enable

# Usa Corepack para preparar pnpm
RUN corepack prepare pnpm@latest --activate

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN pnpm install

# Copia el código fuente
COPY . .

# Expone el puerto 3000 para el backend NestJS
EXPOSE 3000

# Comando por defecto
CMD ["pnpm", "run", "start:dev"]
