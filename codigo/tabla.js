function Tabla() {
    this.tabla = [];
    this.tapada = [];

    for (var f = 0; f < 5; f++) {
        this.tabla[f] = [];
        this.tapada[f] = [];
        for (var c = 0; c < 5; c++) {
            if (!(c == 2 && f == 2))
                this.tabla[f][c] = c * 15 + Math.floor(Math.random() * 15) + 1;
            else {
                this.tabla[f][c] = "LIBRE";
            }
            this.tapada[f][c] = true;
        }

    }
    this.taparNumero = function (balotasSacadas) {
        for (var f = 0; f < 5; f++) {
            for (var c = 0; c < 5; c++) {
                if (this.tabla[f][c] == balotasSacadas) {
                    this.tapada[f][c] = true;
                }
            }
        }
    }

}