# Etapa 1 (build): Compilación de los recursos
FROM node:20 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# package-lock.json, package.json -> /app
COPY package*.json ./

# Funciona para generar el node_modules
RUN npm install

# /client/* -> /app/*
COPY . .

# Traer esos argumentos (Llegan del compose)
ARG API_HOST
ARG API_BASE
ARG API_PORT
ARG API_PROTOCOL

# Establecer las variables de entorno en base a los argumentos (Van al .env)
ENV VITE_API_HOST=$API_HOST
ENV VITE_API_BASE=$API_BASE
ENV VITE_API_PORT=$API_PORT
ENV VITE_API_PROTOCOL=$API_PROTOCOL

# Funciona para generar la carpeta /dist
RUN npm run build

# Etapa 2: Construcción de la imagen
FROM nginx:alpine

# Servir todos los recursos generados en la etapa anterior en la imagen
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar el archivo nginx.conf a la imagen para habilitar https
COPY ./nginx.conf /etc/nginx/nginx.conf

# Exponer la imagen en el puerto
EXPOSE 80

# Levantar el nginx
# nginx -g daemon off;
CMD ["nginx", "-g", "daemon off;"]