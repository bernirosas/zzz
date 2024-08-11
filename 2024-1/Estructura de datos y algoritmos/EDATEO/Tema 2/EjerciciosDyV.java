
/**
 * Write a description of class EjerciciosDyV here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class EjerciciosDyV {
    public static int puntoCruce(int []v){ // es un vector
        return puntoCruce(v,0,v.length-1);
    }
    
    private static int puntoCruce(int []v, int ini, int fin){
        int m = (ini+fin)/2;
        if (v[m] <= 0 && v[m+1] >0)
            return m;
        // me interesa ver si me interesa la izquierda o la derecha.
        if (v[m]>0)
        return puntoCruce(v,ini,m-1); // yo ya miré la m así que le quito 1
        else
            return puntoCruce(v, m+1, fin);
    }
    
    public static int valorIgualPosicion(int []v){
        return valorIgualPosicion(v,0,v.length-1);
    }
    
    private static int valorIgualPosicion(int []v, int ini, int fin){
        if (ini > fin)return -1; // hay sol
        int m = (ini + fin)/2;
        if (v[m]==m)return m;
        if (v[m]>m) return valorIgualPosicion(v, ini, m-1);
        else return valorIgualPosicion(v,m+1,fin);
    }
    
    public static boolean vecinas(String[] v, String x, String y){
        return vecinas(v, x, y, 0, v.length-1);
    }
    
    private static boolean vecinas(String[] v, String x, String y, int i, int j){
        int m = (i+j)/2;
        if (v[m].compareTo(x) > 0){
            return vecinas(v,x,y,i,m-1);
        }
        if (v[m].compareTo(x)==0){
            return v[m+1].equals(y);
        }
        return vecinas(v, x, y, m+1, j);
    }
}
