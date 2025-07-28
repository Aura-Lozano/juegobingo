function Tabla() {

    this.tabla = [];
    this.tapada = [];

    for (var f = 0; f < 5; f++) {
        this.tabla[f] = [];
        this.tapada[f] = [];
        for (var c = 0; c < 5; c++) {
            this.tabla[f][c] = 0;
            this.tapada[f][c] = false;
        }
    }

    this.repetido = function (columna, numero) {
        for (var f = 0; f < 5; f++) {
            if (this.tabla[f][columna] == numero) {
                return true;
            }
        }
        return false;
    }

    for (var f = 0; f < 5; f++) {
        for (var c = 0; c < 5; c++) {
 
            if (!(c == 2 && f == 2)) {
                numero = c * 15 + Math.floor(Math.random() * 15) + 1;
                while (this.repetido(c, numero)) {
                    numero = c * 15 + Math.floor(Math.random() * 15) + 1;
                }
                this.tabla[f][c] = numero;
            }
            else {
                this.tabla[f][c] = "LIBRE";
                this.tapada[f][c] = true;
            }
        }
    }

    this.taparNumero = function (balotaSacada) {
        for (var f = 0; f < 5; f++) {
            for (var c = 0; c < 5; c++) {
                if (this.tabla[f][c] == balotaSacada) {
                    this.tapada[f][c] = true;
                }
            }
        }
    }

    this.verificarBingo = function () {
   
        for (let f = 0; f < 5; f++) {
            let bingoFila = true;
            for (let c = 0; c < 5; c++) {
                if (!this.tapada[f][c]) {
                    bingoFila = false;
                    break;
                }
            }
            if (bingoFila) return true;
        }


        for (let c = 0; c < 5; c++) {
            let bingoColumna = true;
            for (let f = 0; f < 5; f++) {
                if (!this.tapada[f][c]) {
                    bingoColumna = false;
                    break;
                }
            }
            if (bingoColumna) return true;
        }

        let bingoDiagonal1 = true;
        for (let i = 0; i < 5; i++) {
            if (!this.tapada[i][i]) {
                bingoDiagonal1 = false;
                break;
            }
        }
        if (bingoDiagonal1) return true;

        let bingoDiagonal2 = true;
        for (let i = 0; i < 5; i++) {
            if (!this.tapada[i][4 - i]) {
                bingoDiagonal2 = false;
                break;
            }
        }
        if (bingoDiagonal2) return true;

        return false;
    }
}