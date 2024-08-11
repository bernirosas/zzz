# WebgardiumLeviosa frontend
Para ver la aplicación, usar yarn dev desde la raíz de cada repositorio (frontend y backend). Luego ingresar a http://localhost:5173.


## Integrantes
- @ConiiiH
- @FranciscoPinto1138
- @bernirosas


## Información diseño del HTML


- Se implementa una página intermedia entre iniciar sesión y elegir una casa. En esta página se pide elegir entre iniciar una partida y unirse a una partida.
- Cuando un boton no esta disponible para ser usado aparece de color gris y no se permite ser presionado. En caso contrario, aparece morado.


## Jugadas implementadas


- Compra inicial de recursos para iniciar el juego (2 poblados y 2 puentes). Se inicia a cada usuario con los recursos necesarios para hacer esta compra y no se permite comprar otra cosa en este momento de la partida.
- Tirar los dados para iniciar el turno, con la asignación de recursos correspondiente a cada jugador. Para hacer esto se debe en primer lugar apretar el botón de tirar dados y luego aparecen unos dados moviéndose, en segundo lugar se debe apretar esta imagen y con esto se completa la jugada. Aparece un pop up del número obtenido y se asignan los recursos que corresponden.
- Canjear todos los recursos disponibles de la tienda, con la disminución correcta de los recursos.
- Terminar turno. Esto da paso a iniciar nuevamente el turno y se crea un ciclo de tirar dados - canjear recursos - terminar turno.


## Consideraciones sobre las reglas


- Los puentes deben ser adyacentes a un poblado o castillo para poder ser puesto en el tablero (se revisa que se cumpla esta regla).
- Se puede mejorar un poblado por un castillo, con las respectivas mejoras asociadas (imagen y doble asignación de recursos).


## Supuestos


- Al crear una partida, para que otro usuario ingrese a la partida debe tener el id de la partida.
- No se ha implementado múltiples jugadores, por ahora solo se ocupa 1 jugador en la partida.
- Para esta entrega solo se pueden usar los usuarios que creamos con las semillas y se debe crear una partida nueva. Se revisa que el usuario exista, sin embargo la contraseña no es revisada.


Usuarios disponibles


```
usuario: berni contraseña: berni123
usuario: coni contraseña: coni123
usuario: pinto contraseña: pinto123
```


## Consideraciones


- Todos los cambios se ven reflejados en la base de datos (se crean juegos, jugadores, usuarios, asentamientos y carreteras). Así como también, se actualizan recursos y puntajes de jugadores con las compras y se actualiza status de asentamiento al mejorarlo a castillo.
- Se realiza la conexión de frontend y backend, por lo que no se realizan archivos json que simulan las jugadas.
- Se actualiza el diagrama ER.


## Archivo .env frontend


```
VITE_BACKEND_URL = "http://localhost:3000"
```


## Archivo .env backend


```
DB_USERNAME = webgardiumleviosa
DB_PASSWORD = webgardiumleviosa
DB_NAME = webgardiumleviosa
DB_HOST = 'localhost'
```
