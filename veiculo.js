function Veiculo(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.detalhes = function () {
        console.log(`Veículo: ${this.marca} ${this.modelo}`);
    };
}

function Carro(marca, modelo, tipo, preco) {
    this.tipo = tipo;
    let _preco = preco;

    this.getPreco = function () {
        return _preco;
    };

    this.setPreco = function (valor) {
        if (typeof valor === "number") {
            _preco = valor;
        }
    };

    this.aplicarDesconto = function () {
        const novoPreco = _preco * 0.9;
        _preco = novoPreco;
    };

    this.dizTipo = function () {
        console.log(`Tipo: ${this.tipo}`);
    };

    Veiculo.call(this, marca, modelo);
}

function SUV(marca, modelo) {
    Carro.call(this, marca, modelo, "SUV", 120000);

    this.aplicarDesconto = function () {
        const novoPreco = this.getPreco() * 0.85;
        this.setPreco(novoPreco);
    };
}

function Hatch(marca, modelo) {
    Carro.call(this, marca, modelo, "Hatch", 60000);

    this.aplicarDesconto = function () {
        const novoPreco = this.getPreco() * 0.93;
        this.setPreco(novoPreco);
    };
}

const carro1 = new Carro("Toyota", "Corolla", "Sedan", 100000);
const carro2 = new SUV("Jeep", "Compass");
const carro3 = new Hatch("Volkswagen", "Gol");

carro1.aplicarDesconto();
console.log(`O preço do ${carro1.marca} - ${carro1.modelo} com o desconto aplicado é: ${carro1.getPreco()}`);

carro2.aplicarDesconto();
console.log(`O preço do ${carro2.marca} - ${carro2.modelo} com o desconto aplicado é: ${carro2.getPreco()}`);

carro3.aplicarDesconto();
console.log(`O preço do ${carro3.marca} - ${carro3.modelo} com o desconto aplicado é: ${carro3.getPreco()}`);

