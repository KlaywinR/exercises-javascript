class Retangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  area() {
    return this.base * this.altura;
  }

  perimetro() {
    return 2 * (this.base + this.altura);
  }

  toString() {
    return `Retângulo ${this.base}x${this.altura} -> Área: ${this.area()}, Perímetro: ${this.perimetro()}`;
  }
}

// teste
const retangulos = [new Retangulo(4, 5), new Retangulo(10, 2), new Retangulo(7, 7)];

retangulos.forEach((r) => console.log(r.toString()));

module.exports = { Retangulo };