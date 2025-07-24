angular.module("bingo", [])
    .controller("Controladorbingo",
        function ($scope) {

            $scope.cantor = new Cantor();
            $scope.iniciarJuego = function () {

            }

            $scope.sacarBalota = function () {
                $scope.cantor.sacarBalota(); 
            }
        }
    );