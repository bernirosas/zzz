package ejemplos.tema5;
import  librerias.estructurasDeDatos.modelos.MapOrdenado; 
import  librerias.estructurasDeDatos.modelos.EntradaMap; 
import  librerias.estructurasDeDatos.modelos.ListaConPI;
import  librerias.estructurasDeDatos.lineales.LEGListaConPI;
import librerias.estructurasDeDatos.jerarquicos.*;
 import librerias.estructurasDeDatos.lineales.*;


/**
 * Write a description of class ABBMapOrdenadoEjercicios here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class ABBMapOrdenadoEjercicio<C extends Comparable<C>, V> implements MapOrdenado<C, V> {
    
    // Un ABBMapOrdenado TIENE UN...
    protected ABB<EntradaMap<C, V>> abb;
    
    public ABBMapOrdenadoEjercicio(){
        abb = new ABB<EntradaMap<C,V>>();
    }
    
    public V insertar(C c, V v){
        EntradaMap<C,V> entrada = abb.recuperar(new EntradaMap(c,null));
        abb.insertar(new EntradaMap(c,v));
        if(entrada==null)return null;
        else return entrada.getValor();
    };
    
    /** elimina la Entrada con Clave c de un Map y devuelve su 
     *  valor asociado, null si no existe una Entrada con dicha clave
     */
    public V eliminar(C c){
        EntradaMap<C,V> entrada = abb.recuperar(new EntradaMap(c,null));
        if(entrada==null)return null;
        abb.eliminar(new EntradaMap(c,null));
        return entrada.getValor();
            };
    
    /** devuelve el valor asociado a la clave c en un Map,
     *  null si no existe una Entrada con dicha clave
     */
    public V recuperar(C c){
        EntradaMap<C,V> entrada = abb.recuperar(new EntradaMap(c,null));
        if(entrada==null)return null;
        else return entrada.getValor();

    };
    
    /** comprueba si un Map esta vacio */
    public boolean esVacio(){
        return abb.esVacio();
    };
    
    /** devuelve la talla, o numero de Entradas, de un Map */
    public int talla(){
        return abb.talla();
    };
    
    /** devuelve una ListaConPI con las talla() Claves de un Map */
    public ListaConPI<C> claves(){
        ListaConPI<EntradaMap<C,V>> listaCompleta = abb.toListaConPI();
        ListaConPI<C> res = new LEGListaConPI<C>();
        }
    
        /** SII !esVacio(): 
     *  recupera la Entrada de Clave minima de un Map Ordenado */
    public EntradaMap<C, V> recuperarEntradaMin(){
        return abb.recuperarMin();
    };
    /** SII !esVacio(): recupera la Clave minima de un Map Ordenado */
    public C recuperarMin(){
        return abb.recuperarMin().getClave();
    };   
   
    /** SII !esVacio(): 
     *  recupera la Entrada de Clave maxima de un Map Ordenado */
    public EntradaMap<C, V> recuperarEntradaMax(){
        return abb.recuperarMax();
    };
    /** SII !esVacio(): recupera la Clave maxima de un Map Ordenado */
    public C recuperarMax(){
        return abb.recuperarMax().getClave();
    }; 

    /** SII !esVacio(): recupera la Entrada siguiente a c
     *  segun el orden establecido entre claves */
    public EntradaMap<C, V> sucesorEntrada(C c){
        
    };  
    /** SII !esVacio(): recupera la clave siguiente a c
     *  segun el orden establecido entre claves */
    public C sucesor(C c); 
    
    /** SII !esVacio(): recupera la Entrada anterior a c
     *  segun el orden establecido entre claves */
    public EntradaMap<C, V> predecesorEntrada(C c);  
    /** SII !esVacio(): recupera la clave anterior a c
     *  segun el orden establecido entre claves */
    public C predecesor(C c); 
    
    /** SII !esVacio(): 
     * elimina y devuelve la Entrada de Clave minima de un Map Ordenado */
    public EntradaMap<C, V> eliminarEntradaMin(){
        return abb.eliminarMin();
    }
    /** SII !esVacio(): 
     *  elimina y devuelve la Clave minima de un Map Ordenado */
    C eliminarMin(){
        return abb.eliminarMin().getClave();
    };
}
