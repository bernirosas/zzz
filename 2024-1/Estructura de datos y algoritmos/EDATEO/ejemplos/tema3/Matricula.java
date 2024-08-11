package ejemplos.tema3;

 

public class Matricula {   
    private int numeros; 
    private String letras;  

    public Matricula(int n, String l) { numeros = n; letras = l; }   

    public int getNumeros() { return numeros; }   

    public String getLetras() { return letras; }   

    public String toString() { return "Matricula " + numeros + " " + letras; }
    
    // AÑADIR LOS METODOS A PARTIR DE AQUI
    public boolean equals(Object otro){
        if (otro instanceof Matricula){
            return ((Matricula)otro).getNumeros()==this.getNumeros() && ((Matricula)otro).getLetras().equals(this.getLetras());
        }
        return false;
    }
}
