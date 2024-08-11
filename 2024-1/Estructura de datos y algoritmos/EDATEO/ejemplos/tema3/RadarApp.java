package ejemplos.tema3;

 

import librerias.estructurasDeDatos.modelos.*; 
import librerias.estructurasDeDatos.deDispersion.*;

public class RadarApp {

    private Map<Matricula, Integer> map;

    public RadarApp() {
        map = new TablaHash<Matricula, Integer>(1000);
    }
    
    public void registrar(Matricula mat) {
        // COMPLETAR
        Integer freq = map.recuperar(mat);
        if(freq==null){
            map.insertar(mat, 1);
        }
        else{
            map.insertar(mat, freq+1);
        }
    }
}
