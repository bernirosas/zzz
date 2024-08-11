linterna(uno).
linterna(dos).
encendida(uno).
encendida(dos).
lugar(sala).
lugar(pasillo). 
lugar(patio).


1{apunta(L, sala);
apunta(L,pasillo);
apunta(L, patio)}1  :-  linterna(L).

1{apunta(L, X) : lugar(X)}1  :-  linterna(L).
% explícame el código de la línea 14
% 1{apunta(L, X) : lugar(X)}1  :-  linterna(L).
#show apunta/2.

oscuro(X) :- lugar(X), not iluminado(X).



