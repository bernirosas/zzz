#const n= 8.
jugador(1..8).

equipo(e1).
equipo(e2). 
equipo(e3).
equipo(e4).
% cada jugador debe estar solo en un equipo
1{juega_en(X,Y):equipo(Y)}1:-jugador(X).
% cada equipo debe tener 2 jugadores
2{juega_en(X,Y): jugador(X)}2 :- equipo(Y). 
#show juega_en/2.

