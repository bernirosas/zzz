% define valores posibles de x e y 
tamano(0..n-1).

% Las soluciones se asignan dentro del dominio y solo una por cada bloque
1{solucion(X, Y, V, B, F) : tamano(X), tamano(Y)}1 :- bloque(B, F, X_r, Y_r, V).


% No pueden repetirse bloques en coordenadas iguales
:- solucion(X1, Y1, V1, B1, F1), solucion(X2, Y2, V2, B2, F2), B1 != B2, X1 = X2, Y1= Y2.
% cada figura respeta posiciones relativas
:- solucion(X1, Y1, V1, B1, F1), solucion(X2, Y2, V2, B2, F2), bloque(B1, F1, X_r1, Y_r1, V1), bloque(B2, F2, X_r2, Y_r2, V2), X1-X2 != X_r1 - X_r2, F1 = F2.
:- solucion(X1, Y1, V1, B1, F1), solucion(X2, Y2, V2, B2, F2), bloque(B1, F1, X_r1, Y_r1, V1), bloque(B2, F2, X_r2, Y_r2, V2), Y1-Y2 != Y_r1 - Y_r2, F1 = F2.
% en cada columna no puede existir un número repetido
:- solucion(X1, Y1, V1, B1, F1), solucion(X2, Y2, V2, B2, F2), Y1 != Y2, V1=V2, X1 = X2.

% en cada fila no puede existir un número repetido
:- solucion(X1, Y1, V1, B1, F1), solucion(X2, Y2, V2, B2, F2), X1 != X2, V1=V2, Y1= Y2.



