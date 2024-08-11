package ejemplos.tema3;
import librerias.estructurasDeDatos.modelos.*;
import librerias.estructurasDeDatos.deDispersion.*;

/**
 * Write a description of class Ejercicios here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Ejercicios {
    public static <E> E modaDe(E[] v){
        Map<E, Integer> map = new TablaHash<E, Integer>(v.length);
        E moda = null;
        Integer freqMax = -1;
        for(int i = 0; i<v.length; i++){
            Integer freq= map.recuperar(v[i]);
            if(freq==null) freq = 1;
            else freq = freq+1;
            map.insertar(v[i], freq);
            if (freq>freqMax){
                freqMax=freq;
                moda=v[i];
            }
        }
        return moda;
        /*
         * 
         * La opción mala:
         * ListaConPI<E> claves = map.claves();
         * E moda = null
         * Integer freqMax = -1;
         * for (claves.inicio(); ! claves.esFin(); claves.siguiente()){
         *     Integer freq = map.recuperar(claves.recuperar());
         *     if(freq> freqMap){
         *         moda = map,recuperar()
         }
         }
         * */
    
    }
    
    public static <C,V> Map<C,V> diferencia(Map<C,V> m1, Map<C,V>m2){
    Map<C,V> resultado=new TablaHash<C,V>(m1.talla());
    ListaConPI<C> claves = m1.claves();
    for(claves.inicio(); !claves.esFin(); claves.siguiente()){
        C clave = claves.recuperar();
        if(m2.recuperar(clave)==null) resultado.insertar(clave, m1.recuperar(clave)); // recuperar si me cuesta constante
    }
    return resultado;
    }
    
    public static <Alumno> Map<Alumno, Double> obtenerAprobados(Map<Alumno, Double> m){
        Map<Alumno,Double> resultado = new TablaHash<Alumno, Double>(m.talla());
        ListaConPI<Alumno> claves = m.claves();
        for(claves.inicio(); !claves.esFin(); claves.siguiente()){
            Alumno a = claves.recuperar();
            Double nota = m.recuperar(a);
            if(nota>=5){
                resultado.insertar(a, nota);
                m.eliminar(a);
            }
        }
        return resultado;
    }
    
    
    public static String metodoArrays( Integer[] v, Integer e){
	String res = "";
	Map<Integer, Integer> m = new TablaHash<Integer, Integer>(v.length);
	for (int i=0; i<v.length; i++){
		int elemento = v[i];

		if(m.recuperar(e-elemento) != null){
		    res += "v[" + i + "] + v[" + (m.recuperar(e-elemento)) + "] = " + elemento + " + " + (e - elemento) +"\n";
		  }
		  
		Integer Repetido = m.insertar(elemento, i);
		if (Repetido!=null) return "error";
		
        }
        return res;
    }
    
    
    
    
}
