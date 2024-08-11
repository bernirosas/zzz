% riega(R,P) el regador R riega (apunta a) a la planta P
riega(r1, durazno).
riega(r2, tomate).
riega(r2, oregano).
riega(r3, oregano).
regador(r1).
regador(r2).
regador(r3).
planta(durazno).
planta(tomate).
planta(oregano).
mojada(P) :- planta(P), encendido(R), riega(R, P), not defectuoso(R).
% hay exactamente dos regadores encendidos
2 { encendido(R): regador(R)} 2.
observacion :- not mojada(oregano).
% Criterio: Regador riega oregano y se encuentra encendido, pero este no est ́a mojado
criterio(R) :- regador(R), encendido(R), riega(R, oregano), observacion.
% A lo m ́as 1 regador puede estar defectuoso
1 {defectuoso(R): criterio(R)} 1.


