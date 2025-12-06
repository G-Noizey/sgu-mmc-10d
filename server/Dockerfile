# Servir la imagen del backend con maven
FROM maven:3.9.9-eclipse-temurin-21

# Establecer un directorio de trabajo
WORKDIR /app

# Copia todos los archivos del proyecto en el directorio de trabajo
COPY . .

# Ejecutar 2 comandos:
# 1.- Limpiar y compilar el jar del backend
# 2.- Copiar el jar resultante al directorio de trabajo
RUN mvn clean package -DskipTests && cp target/*.jar app.jar

# Exponer la imagen en puerto
EXPOSE 8081

# Ejecutar el comando para servir el jar
ENTRYPOINT ["java", "-jar", "app.jar"]