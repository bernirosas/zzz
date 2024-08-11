rango(1..100).

1 { c1(X) : rango(X) } 1.
1 { c2(X) : rango(X) } 1.
1 { c3(X) : rango(X) } 1.
1 { c4(X) : rango(X) } 1.
1 { c5(X) : rango(X) } 1.
1 { c6(X) : rango(X) } 1.
1 { c7(X) : rango(X) } 1.

% Regla de inferencia
X > Y + 5 :- c4(X), c1(Y).
4 + X > Y + 3 :- c2(X), c3(Y).
2 + Y + Z < 4 + X :- c2(X), c3(Y), c6(Z).
4 + X < Y + Z  + W :- c2(X), c3(Y), c6(Z), c7(W).
X + Z < Y + W :- c2(X), c3(Y), c5(Z), c6(W).
#show c4/1.
#show c1/1.
#show c2/1.
#show c3/1.
#show c5/1.
#show c6/1.
#show c7/1.

