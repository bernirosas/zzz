package ejemplos.tema1;
import librerias.estructurasDeDatos.modelos.*;
import librerias.estructurasDeDatos.lineales.*;

public class TestEDACola {
  public static void main(String[] args) {      
      Cola <Integer>q = new ArrayCola<Integer>(); /* para decirle que es lo que tiene la cola, nos referimos a la cola como q*/
      int tallaQ=0;
      System.out.println("Creada una Cola con " + tallaQ 
          + " Integer, q = " + q.toString());
      q.encolar(new Integer(10));
      tallaQ++;
      q.encolar(new Integer(20));
      tallaQ++;
      q.encolar(new Integer(30));
      tallaQ++;
      System.out.println("La Cola de Integer actual es q = " + q.toString());
      System.out.println("Usando otros metodos para mostrar sus Datos el resultado es ...");
      String datosQ = "";
      while (!q.esVacia()) {
          Integer primero = q.primero();
          if (primero.equals(q.desencolar())) datosQ += primero + " "; 
          else datosQ += "ERROR ";
      }
      System.out.println(" el mismo, " + datosQ 
          + ", PERO q se vacia, q = " + q.toString());
  }
}
