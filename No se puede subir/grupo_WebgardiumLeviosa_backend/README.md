# WebgardiumLeviosa backend
Para ver la aplicación, usar yarn dev desde la raíz de cada repositorio (frontend y backend). Luego ingresar a http://localhost:5173.
El link a la documentación corresponde a [este](https://app.getpostman.com/join-team?invite_code=332e876621d952b385313edd8a37c88e&target_code=3a6c2853856d92015d69f1f3451c5199). 

## Integrantes
- @ConiiiH
- @FranciscoPinto1138
- @bernirosas


## Información diseño del HTML


- Se implementa una página intermedia entre iniciar sesión y elegir una casa. En esta página se pide elegir entre iniciar una partida o unirse a una partida.
- Cuando un boton no esta disponible para ser usado aparece de color gris y no se permite ser presionado. En caso contrario, aparece morado.


## Jugadas implementadas


- Compra inicial de recursos para iniciar el juego (2 poblados y 2 puentes). Se inicia a cada usuario con los recursos necesarios para hacer esta compra y no se permite comprar otra cosa en este momento de la partida. Para comenzar el juego debe haber 4 jugadores en la partida y apretar el boton de terminar turno. Todos deben colocar 2 poblados y 2 puentes para que se puedan tirar los dados.
- Tirar los dados para iniciar el turno, con la asignación de recursos correspondiente a cada jugador. Para hacer esto se debe en primer lugar apretar el botón de tirar dados y luego aparecen unos dados moviéndose, en segundo lugar se debe apretar esta imagen y con esto se completa la jugada. Aparece un pop up del número obtenido y se asignan los recursos que corresponden, el doble si es un castillo.
- Canjear castillos, poblados y puentes, con la disminución correcta de los recursos.

## Consideraciones sobre las reglas


- Los puentes deben ser adyacentes a un poblado o castillo para poder ser puesto en el tablero (se revisa que se cumpla esta regla).
- Se puede mejorar un poblado por un castillo, con las respectivas mejoras asociadas (imagen y doble asignación de recursos).


## Supuestos


- Al crear una partida, para que otro usuario ingrese a la partida debe tener el id de la partida.
- Se debe jugar de a 4 jugadores.
- Es posible registrarse aunque hay usuarios implementados mediante seeds.


Usuarios disponibles


```
usuario: berni contraseña: berni123
usuario: coni contraseña: coni123
usuario: pinto contraseña: pinto123
usuario: cata contraseña: cata123
```
Es posible crear usuarios nuevos.

## Consideraciones


- Todos los cambios se ven reflejados en la base de datos (se crean juegos, jugadores, usuarios, asentamientos y carreteras). Así como también, se actualizan recursos y puntajes de jugadores con las compras y se actualiza status de asentamiento al mejorarlo a castillo.
- Se realiza la conexión de frontend y backend.
- Se actualiza el diagrama ER.
- Todas las validaciones necesarias fueron implementadas.
- No es posible que dos usuarios usen la misma casa, y arroja alerta en caso de (y no deja unirse al juego).
- Los nombres de usuario deben ser alfanúmericos y únicos, así como sus contraseñas deben ser alfa numéricas.
- Solo los usuario coni, berni y pinto tienen autorización para ver la lista de usuarios (al resto les tira alert).
- Las actualizaciones ocurren cada un segundo en las interfaces gráficas, por lo que es probable cierto desfase al comprar recursos.


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
