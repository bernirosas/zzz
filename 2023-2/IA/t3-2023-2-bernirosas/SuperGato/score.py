import numpy as np

def contar_tableros_diferencia(tablero, ficha) -> int:
    """
    tablero: Tablero
    jugador: int
    Devuelve la cantidad de subtableros en que el jugador tiene más fichas que el oponente
    """
    tableros_con_diferencia = 0
    for sub_tablero in tablero.tableros:
        contar_ficha_1 = 0
        contar_ficha_2 = 0
        for a in range(3):
            for i in range(3):
                if sub_tablero[a, i] == 1:
                    contar_ficha_1 += 1
                elif sub_tablero[a, i] == 2:
                    contar_ficha_2 += 1
        if ficha == "X" and contar_ficha_1 > contar_ficha_2:
            tableros_con_diferencia += 1
        elif ficha == "O" and contar_ficha_2 > contar_ficha_1:
            tableros_con_diferencia += 1
    return tableros_con_diferencia


def contar_fichas_seguidas(tablero, ficha) -> int:
    """
    tablero: Tablero
    ficha: int
    Devuelve la cantidad de pares de fichas seguidas de un jugador, se suma 3
    si tiene 3 seguidas (ganador del tablero)
    """

    fichas_seguidas = 0
    if ficha == "O":
        num_ficha = 2
        num_ficha_oponente = 1
    elif ficha == "X":
        num_ficha = 1
        num_ficha_oponente = 2
    i = 0
    j = 0
    subtablero_ganados = np.zeros((3, 3), dtype=np.int8)
    for sub_tablero in tablero.tableros:
        if j == 3:
            j = 0
            i += 1
        revisar_ganador = True
        # revisar si la ficha ganó el subtablero
        for col in range(3):
            # por la columna
            if np.all(sub_tablero[:, col] == num_ficha) and revisar_ganador:
                fichas_seguidas += 5
                subtablero_ganados[i, j] = 1
                revisar_ganador = False
            elif np.all(sub_tablero[:, col] == num_ficha_oponente) and revisar_ganador:
                revisar_ganador = False
            # por la fila
            elif np.all(sub_tablero[col, :] == num_ficha) and revisar_ganador:
                fichas_seguidas += 5
                subtablero_ganados[i, j] = 1
                revisar_ganador = False
            elif np.all(sub_tablero[col, :] == num_ficha_oponente) and revisar_ganador:
                revisar_ganador = False
        if np.all(np.diag(sub_tablero.tablero) == num_ficha) and revisar_ganador:
            fichas_seguidas += 5
            subtablero_ganados[i, j] = 1
            revisar_ganador = False
        elif np.all(np.diag(sub_tablero.tablero) == num_ficha_oponente) and revisar_ganador:
            revisar_ganador = False
        # por la otra diagonal
        elif np.all(np.diag(np.fliplr(sub_tablero.tablero)) == num_ficha) and revisar_ganador:
            fichas_seguidas += 5
            subtablero_ganados[i, j] = 1
            revisar_ganador = False
        elif np.all(np.diag(np.fliplr(sub_tablero.tablero)) == num_ficha_oponente) and revisar_ganador:
            revisar_ganador = False
        # revisar si tiene 2 fichas seguidas
        if revisar_ganador:  # nadie ha ganado el subtablero
            for col in range(3):
                # por la columna, hay dos formas de tener 
                # dos seguidas 0 1 1 y 1 1 0
                if ((sub_tablero[0, col] == num_ficha and sub_tablero[1, col]
                    == num_ficha)
                    or
                    (sub_tablero[1, col] == num_ficha and sub_tablero[2, col]
                     == num_ficha)):
                    fichas_seguidas += 1
                # por la fila hay dos formas de tener
                # dos seguidas 0 1 1 y 1 1 0
                if ((sub_tablero[col, 0] == num_ficha and sub_tablero[col, 1]
                    == num_ficha)
                    or
                    (sub_tablero[col, 1] == num_ficha and sub_tablero[col, 2]
                     == num_ficha)):
                    fichas_seguidas += 1
            # por las diagonales hay dos formas de tener
            # dos seguidas 0 1 1 y 1 1 0
            if ((np.diag(sub_tablero.tablero)[0] == num_ficha and
                np.diag(sub_tablero.tablero)[1] == num_ficha)
                or
                (np.diag(sub_tablero.tablero)[1] == num_ficha and
                 np.diag(sub_tablero.tablero)[2] == num_ficha)):
                fichas_seguidas += 1
            if ((np.diag(np.fliplr(sub_tablero.tablero))[0] == num_ficha
                and
                np.diag(np.fliplr(sub_tablero.tablero))[1] == num_ficha)
                or
                (np.diag(np.fliplr(sub_tablero.tablero))[1] == num_ficha
                and
                 np.diag(np.fliplr(sub_tablero.tablero))[2] == num_ficha)):
                fichas_seguidas += 1
        j += 1
    # Revisar si ganó el tablero
    revisar = True
    for col in range(3):
        # por la columna
        if np.all(subtablero_ganados[:, col] == 1) and revisar:
            fichas_seguidas += 15
            revisar = False
        # por la fila
        elif np.all(subtablero_ganados[col, :] == 1) and revisar:
            fichas_seguidas += 15
            revisar = False
    if np.all(np.diag(subtablero_ganados) == 1) and revisar:
        fichas_seguidas += 15
        revisar = False
    elif np.all(np.diag(np.fliplr(subtablero_ganados)) == 1) and revisar:
        fichas_seguidas += 15
        revisar = False
    return fichas_seguidas

def mi_funcion(tablero, ficha) -> int:

    """
    además de revisar los pares de fichas en un subtablero no ganado, se fija que no 
    haya sido bloqueado por el oponente en tal fila, columna o diagonal
    movimientos faltantes para ganar tablero.
    Añadir por tener el de al medio
    Contar subtableros solo si no están ganados
    """
    fichas_relevantes = 0
    if ficha == "O":
        num_ficha = 2
        num_ficha_oponente = 1
    elif ficha == "X":
        num_ficha = 1
        num_ficha_oponente = 2
    i = 0
    j = 0
    subtablero_ganados = np.zeros((3, 3), dtype=np.int8)
    # esto nos servirá para saber si el subtablero está ganado y por quién
    # en qué posición
    fichas_relevantes_en_subtablero = np.zeros((3, 3), dtype=np.int8)
    # después de ver qué subtableros nos importan, vemos qué 
    # fichas nos importan
    for sub_tablero in tablero.tableros:
        if j == 3:
            j = 0
            i += 1
        revisar_ganador = True
        # revisar si la ficha ganó el subtablero
        for col in range(3):
            # por la columna
            if np.all(sub_tablero[:, col] == num_ficha) and revisar_ganador:
                fichas_relevantes_en_subtablero[i, j] += 5
                subtablero_ganados[i, j] = 1  # gano el jugador
                revisar_ganador = False
            elif np.all(sub_tablero[:, col] == num_ficha_oponente) and revisar_ganador:
                revisar_ganador = False
                subtablero_ganados[i, j] = 2  # ganó contrincante
            # por la fila
            elif np.all(sub_tablero[col, :] == num_ficha) and revisar_ganador:
                fichas_relevantes_en_subtablero[i, j] += 5
                subtablero_ganados[i, j] = 1  # gano el jugador
                revisar_ganador = False
            elif np.all(sub_tablero[col, :] == num_ficha_oponente) and revisar_ganador:
                revisar_ganador = False
                subtablero_ganados[i, j] = 2  # ganó contrincante
        if np.all(np.diag(sub_tablero.tablero) == num_ficha) and revisar_ganador:
            fichas_relevantes_en_subtablero[i, j] += 5
            subtablero_ganados[i, j] = 1  # gano el jugador
            revisar_ganador = False
        elif np.all(np.diag(sub_tablero.tablero) == num_ficha_oponente) and revisar_ganador:
            revisar_ganador = False
            subtablero_ganados[i, j] = 2  # ganó contrincante
        # por la otra diagonal
        elif np.all(np.diag(np.fliplr(sub_tablero.tablero)) == num_ficha) and revisar_ganador:
            fichas_relevantes_en_subtablero[i, j] += 5
            subtablero_ganados[i, j] = 1
            revisar_ganador = False
        elif (np.all(np.diag(np.fliplr(sub_tablero.tablero))
                     == num_ficha_oponente)
              and revisar_ganador):
            revisar_ganador = False
            subtablero_ganados[i, j] = 2
        # revisar si tiene 2 fichas seguidas
        if revisar_ganador:  # nadie ha ganado el subtablero
            for col in range(3):
                # por la columna, necesario asegurarse de
                # que no haya sido bloqueado por el oponente
                # para que de verdad sea una ventaja
                if (np.sum(sub_tablero[:, col] == num_ficha) == 2
                    and
                    np.sum(sub_tablero[:, col] == 0) == 1
                   and revisar_ganador):
                    fichas_relevantes_en_subtablero[i, j] += 1
                if (np.sum(sub_tablero[col, :] == num_ficha) == 2
                    and
                    np.sum(sub_tablero[col, :] == 0) == 1
                   and revisar_ganador):
                    fichas_relevantes_en_subtablero[i, j] += 1
            if (np.sum(np.diag(sub_tablero.tablero) == num_ficha) == 2
                and
                np.sum(np.diag(sub_tablero.tablero) == 0) == 1
               and revisar_ganador):
                fichas_relevantes_en_subtablero[i, j] += 1
            if (np.sum(np.diag(np.fliplr(sub_tablero.tablero)) == num_ficha) == 2
                and
                np.sum(np.diag(np.fliplr(sub_tablero.tablero)) == 0) == 1
               and revisar_ganador):
                fichas_relevantes_en_subtablero[i, j] += 1
        j += 1
    # Revisar qué tan bien va en el tablero general
    # no vamos a ver el caso en el que gana
    revisar = True
    for col in range(3):
        # por la columna
        if np.all(subtablero_ganados[:, col] == 1) and revisar:
            fichas_relevantes += 15
            revisar = False  # ya se ganó el tablero
        elif np.sum(subtablero_ganados[:, col] == 2) == 0 and revisar: # no está bloqueado
            # entonces añadimos las fichas relevantes de tales subtablero
            fichas_relevantes += fichas_relevantes_en_subtablero[0, col]
            fichas_relevantes += fichas_relevantes_en_subtablero[1, col]
            fichas_relevantes += fichas_relevantes_en_subtablero[2, col]
        # por la fila
        if np.all(subtablero_ganados[col, :] == 1) and revisar:
            fichas_relevantes += 15
            revisar = False
        elif np.sum(subtablero_ganados[col, :] == 2) == 0 and revisar:
            fichas_relevantes += fichas_relevantes_en_subtablero[col, 0]
            fichas_relevantes += fichas_relevantes_en_subtablero[col, 1]
            fichas_relevantes += fichas_relevantes_en_subtablero[col, 2]
    if np.all(np.diag(subtablero_ganados) == 1) and revisar:
        fichas_relevantes += 15
        revisar = False
    elif np.sum(np.diag(subtablero_ganados) == 2) == 0 and revisar:  # no está bloqueado
        fichas_relevantes += fichas_relevantes_en_subtablero[0, 0]
        fichas_relevantes += fichas_relevantes_en_subtablero[1, 1]
        fichas_relevantes += fichas_relevantes_en_subtablero[2, 2]
    if np.all(np.diag(np.fliplr(subtablero_ganados)) == 1) and revisar:
        fichas_relevantes += 15
        revisar = False
    elif np.sum(np.diag(np.fliplr(subtablero_ganados)) == 2) == 0 and revisar:
        fichas_relevantes += fichas_relevantes_en_subtablero[0, 2]
        fichas_relevantes += fichas_relevantes_en_subtablero[1, 1]
        fichas_relevantes += fichas_relevantes_en_subtablero[2, 0]
    return fichas_relevantes
