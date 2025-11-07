class Punto2D {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }


}

let punto1 = new Punto2D(2, 3);
let punto2 = new Punto2D(5, 8);


let func: (p1: Punto2D, p2: Punto2D) => number;

//Inicializa la función para que calcule la distancia entre dos puntos(Usando pitagoras)

func = function (p1, p2) {
    let diferenciaX = p2.getX() - p1.getX();
    let diferenciaY = p2.getY() - p1.getY();
    return Math.sqrt(diferenciaX * diferenciaX + diferenciaY * diferenciaY);
}

console.log("La distancia entre los puntos es: " + func(punto1, punto2));