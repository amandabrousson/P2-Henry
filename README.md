![image](https://github.com/user-attachments/assets/f9bc8521-1b2f-44c6-a8b9-adb223120310)

Segundo proyecto del bootcamp de programación fullstack SoyHenry.

⭐ HomeMovies ⭐

![image](https://github.com/user-attachments/assets/684ae0df-c16e-4c80-a222-f441d9e1f62b)

Página web con estructura fullstack. Se encuentra comprendida por un backend, cuyo servidor se encuentra conectado a una base de datos y un frontend que consume la información provista por el servidor. 

## 🛠️ Tecnologías utilizadas:
- Javascript
- CSS
- Express
- Node
- Jest
- Ajax
- Base de datos (MongoDB ATLAS, MongoDB COMPASS, mongoose). 

## 🎯 Objetivos:
- Diseñar una aplicación de películas, dentro de la cual se puedan consultar, agregar o eliminar películas.
- Manejo de repositorios con Git y Github.
- Manejo de protocolos de comunicación.
- Manejo de bases de datos.

## Instalación

Sigue estos pasos para clonar y ejecutar el proyecto:

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/amandabrousson/P2-Henry.git

2. **Ejecutarlo en Visual Studio Code e instalar sus dependencias en el backend como frontend**:

    ```bash
    Npm install

 3. **Para ejecutar el proyecto y ver la página desde el frontend y backend**:

    ```bash
    Npm start

4. Crear archivo .env. Dentro de este archivo, se encontrarán las variables de entorno necesarias para ejecutar la conexión con la base de datos y el puerto de escucha del servidor Express.

Variables a definir
- Usuario y clave de Mongo Atlas para la base de datos.

  ```bash
   mongoUser=Nombre_de_Usuario_de_Mongo

   mongoKey=Clave_de_Conexion_a_Mongo

- Nombre del clouster donde se creo la base de datos y nombre de la base de datos.

   ```bash
   clousterName=NombreDelClousterDondeEstaAlojadaLaBd

   dbName=NombreDeLaBd

- Puerto que utiliza el servidor backend para levantarse:

   ```bash
   PORT=3001

## 🚀 Desarrollo:


Se compone por:

- Sección “Index”, la cual ejecuta el catálogo de películas disponibles.

![image](https://github.com/user-attachments/assets/bbc95d90-f996-4943-9115-3ab7382e1f7c)

  Al hacer click en la portada de la película se podrán visualizar detalles de la misma, tales como director, género, duración, calificación, así como el video de su trailer. Con el botón cerrar puede esconder la   información y visualizar nuevamente la portada de la película.

  ![image](https://github.com/user-attachments/assets/7460c404-3c90-4198-8ced-3ecd4cf22176)

- Sección “Sobre la web”, la cual provee información relativa a la aplicación

![image](https://github.com/user-attachments/assets/d2001b56-cedb-4580-9c16-5b288e5466c7)
  
- Sección “Otras webs”, la cual detalla de qué medios saca la información de su página, así como tambien sugiere la consulta de otras webs vinculadas al mundo del cine:
  
   ![image](https://github.com/user-attachments/assets/f0f45d00-a8b5-4988-b844-1bd1063e3163)

- Finalmente, cuenta con la sección "Agregar películas", la cual permite al usuario agregar nuevas películas. Las mismas se guardan en una base de datos para lograr su persistencia en la página incluso después de   cerrarla.

  Para poder agregar la película será indispensable que rellene todos los campos del formulario.
  
  ![image](https://github.com/user-attachments/assets/4f432e3f-c291-4e7f-8a1c-1b56847d1dbb)
  

  



