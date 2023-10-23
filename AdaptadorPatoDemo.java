// Interface Pato
interface Pato {
    void grasnar();
    void voar();
}

// Classe Galinha
class Galinha {
    void cacarejar() {
        System.out.println("Cacarejando...");
    }

    void bicar() {
        System.out.println("Bicando...");
    }
}

// Classe AdaptadorPato
class AdaptadorPato implements Pato {
    private Galinha galinha;

    public AdaptadorPato(Galinha galinha) {
        this.galinha = galinha;
    }

    @Override
    public void grasnar() {
        galinha.cacarejar();
    }

    @Override
    public void voar() {
        System.out.println("Voando como um pato...");
    }
}

// Classe AdaptadorPatoDemo
public class AdaptadorPatoDemo {
    public static void main(String[] args) {
        Galinha galinha = new Galinha();
        Pato adaptador = new AdaptadorPato(galinha);

        System.out.println("Galinha se comportando como um pato:");
        adaptador.grasnar();
        adaptador.voar();
    }
}
