angular.module('nameRipple').directive('menu', function () {
    return {
        templateUrl: 'js/menuDir/menu.html',
        controller: function ($scope, $state) {

            console.log($state);

            var state = false;

            $(".menubut").click(function () {

                if (!state) {
                    $(".menu").animate({ "right": ".7vw" });
                    state = true;
                    timeout();
                } else {
                    $(".menu").animate({ "right": "-20vw" });
                    state = false;
                }

            });
            function timeout() {
                setTimeout(function () {
                    if (state) {
                        $(".menu").animate({ "right": "-20vw" });
                        state = false;
                    }
                }, 6542);
            }
            $scope.homeCheck = true;
            $scope.aboutCheck = true;
            $scope.commercialCheck = true;

            $scope.checkPage = function () {
                var state = $state.current.name;
                if (state === 'home') {
                    $scope.homeCheck = false;
                } else
                    if (state === 'about') {
                        $scope.aboutCheck = false;
                    } else
                        if (state === 'commercial') {
                            $scope.commercialCheck = false;
                        }

            };
            $scope.checkPage();

        }};
        }); 