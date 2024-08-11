package ejemplos.tema2;
import librerias.estructurasDeDatos.modelos.*;
import librerias.estructurasDeDatos.lineales.*;

/**
 * Write a description of class Ejercicios here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Ejercicios {
    public static int valorQueHariaConsecutivos (int[] v){
        if(v[v.length-1]==v[0] + v.length-1) return v[v.length-1] + 1;
        return valorQueHariaConsecutivos (v, 0, v.length - 1);
    }
    private static int valorQueHariaConsecutivos (int[] v, int i, int j){
        int m = (i+j)/2;
        if (m>0 && v[m]!=v[m-1] + 1) return v[m-1] + 1;
        if(v[m]>v[0]+ m) return valorQueHariaConsecutivos (v, i, m-1);
        else return valorQueHariaConsecutivos (v, m+1, j);
        
    }
}
