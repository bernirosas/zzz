from tablero import Tablero
from jugador import JugadorHumano, JugadorIA
from score import contar_tableros_diferencia, contar_fichas_seguidas, mi_funcion
import time


def main():
    verbose = True  # Si no quieres ver los prints, ponlo en False

    # jugador_1 = JugadorHumano(ficha="O")
    # jugador_2 = JugadorHumano(ficha="X")

    # Si quieres jugar contra una IA tienes que usar la siguiente línea
    jugador_2 = JugadorIA(ficha="X", profundidad=5,
                          funcion_puntaje=contar_fichas_seguidas)
    jugador_1 = JugadorIA(ficha="O", profundidad=5,
                          funcion_puntaje=contar_fichas_seguidas)

    # Si quieres jugar contra un jugador random tienes que usar la siguiente línea
    # jugador_1 = JugadorRandom(ficha="O")
    # jugador_2 = JugadorRandom(ficha="X")

    # Inicializamos el tablero
    partida = Tablero()
    # Lo imprimimos
    if verbose:
        partida.imprimir_tablero()
        print('Para jugar ingrese dos enteros entre 1 y 3 ' +
              'correspondiente a la subtablero a jugar. Luego ' +
              'ingrese dos nuevos enteros entre 1 y 3 ' +
              'correspondiente a la posicion (x,y) en el subtablero ' +
              'en la que se desee jugar.'
              )

    # A continuación los turnos y la partida.
    # La variable "terminado" representa si la partida esta terminada o no

    # Parte en Falso
    terminado = False
    # terminado = False
    start_time = time.process_time()
    while not terminado:
        # Parte el jugador 1

        # Eligir jugada
        posicion = jugador_1.elegir_jugada(partida)

        if posicion is None:
            print("Tie! :(")
            ganador = None
            break

        # Se ejecuta la jugada
        else:
            partida.ejecutar_jugada(posicion, jugador_1.ficha)


        if verbose:
            partida.imprimir_tablero()

        # Revisamos si la partida terminó
        terminado = partida.revisar_ganador()
        if terminado == "X":
            if verbose:
                print('X wins!')
            ganador = 'X'
            break

        elif terminado == "O":
            if verbose:
                print('O wins!')
            ganador = 'O'
            break

        # Cambia esto si quieres ver el juego en tiempo humano.
        # time.sleep(0.5)

        # Jugador con ficha "O" (computador==minmax)
        # El computador elije su jugada
        posicion = jugador_2.elegir_jugada(partida)

        if posicion is None:
            print("Tie! :(")
            ganador = None
            break
        # Se ejecuta la jugada
        else:
            partida.ejecutar_jugada(posicion, jugador_2.ficha)

        if verbose:
            partida.imprimir_tablero()

        # Revisamos si la partida terminó
        terminado = partida.revisar_ganador()
        if terminado == "O":
            if verbose:
                print('O wins!')
            ganador = 'O'
            break
        elif terminado == "X":
            if verbose:
                print('X wins!')
            ganador = 'X'
            break
    end_time = time.process_time()
    if verbose:
        print('Good game.')
    print('Tiempo de ejecucion: ', end_time - start_time)
    return ganador


if __name__ == '__main__':
    main()
