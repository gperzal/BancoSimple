# Etapa 1: Build del proyecto
FROM eclipse-temurin:21-jdk AS build

WORKDIR /app

# Copiar los archivos de Maven Wrapper y config
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# ✅ Dar permisos de ejecución al wrapper
RUN chmod +x mvnw

# Descargar dependencias
RUN ./mvnw dependency:go-offline

# Copiar el código fuente
COPY src ./src

# Compilar el proyecto sin tests
RUN ./mvnw package -DskipTests


# Etapa 2: Imagen final ligera
FROM eclipse-temurin:21-jdk

WORKDIR /server

# Copiar el .jar desde la etapa de build
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
