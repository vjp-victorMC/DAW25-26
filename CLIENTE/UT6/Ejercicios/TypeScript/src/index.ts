import type { BiDimensional } from './BiDimensional';

class Circulo implements BiDimensional {
    private PI = Math.PI;
    private radio: number;

    constructor(radio: number) {
        this.radio = radio;
    }
    getArea(): number {
        return (this.PI * Math.pow(this.radio, 2));
    }
    pintarInfo(): void {
        console.log("La figura es un círculo");
        console.log("Radio: " + this.radio);
    }
}
class Rectangulo implements BiDimensional {
    private lado1: number;
    private lado2: number;

    constructor(lado1: number, lado2: number) {
        this.lado1 = lado1;
        this.lado2 = lado2;
    }
    getArea(): number {
        return this.lado1 * this.lado2;
    }
    pintarInfo(): void {
        console.log("La figura es un rectangulo");
        console.log("Longitud lados: \nLado1: " + this.lado1 + "\nLado2: " + this.lado2);
    }
}
class Triangulo implements BiDimensional {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }
    getArea(): number {
        return ((this.base * this.altura) / 2);
    }
    pintarInfo(): void {
        console.log("La figura es un triangulo");
        console.log("Longitud base: " + this.base + "\nAltura: " + this.altura);
    }
}


let figuras = [];

figuras.push(new Circulo(3), new Rectangulo(4, 6), new Triangulo(3, 6));

function pintarInfoFiguras(figuras: Array<BiDimensional>): void {
    figuras.forEach(figura => {
        figura.pintarInfo();
        console.log("Area: " + figura.getArea())
    });

    pintarInfoFiguras(figuras);

}