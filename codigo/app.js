angular.module("bingo",[])
.controller("BingoController", 
    function($this) {
    $this.numbers = [];
    $this.generateNumbers = function() {
        $this.numbers = [];
        for (var i = 1; i <= 75; i++) {
            $this.numbers.push(i);
        }
        $this.shuffle($this.numbers);
    };

    $this.shuffle = function(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    $this.generateNumbers();
});
angular.bootstrap(document, ['bingo']); 