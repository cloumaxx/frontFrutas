# Etapa 1: Construcción de la aplicación Angular
FROM node:18-alpine AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install

# Copiar el código fuente de la aplicación
COPY . .

# Ejecuta la construcción de la aplicación en modo producción
RUN npm run build --prod

# Etapa 2: Configuración de Nginx para servir la aplicación Angular
FROM nginx:alpine

# Copia los archivos construidos por Angular a la carpeta donde Nginx los servirá
COPY --from=build /app/dist/frontFrutas /usr/share/nginx/html

# Exponer el puerto 80 para servir la aplicación
EXPOSE 80
