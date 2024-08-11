def Valor(n, turno):
    if es_hoja(n):
        return Valor_final(n)
    if prof == limite:
        return 
    if turno == 1:
        return min([Valor(h,-1) for h in n.succ()])
    else:
        return max([Valor(h,-1) for h in n.succ()])