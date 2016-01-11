angular.module('nameRipple').directive('words', function () {
    return {
        templateUrl: 'js/serchDir/searchText.html',
        controller: function ($scope) {
            $scope.results = [];
            $scope.test= 'TEST';
          var wordSets = {
                colors: ['Red', 'Blue', 'Green'],
                names: ['Jordyn', 'Ryan', 'Chelsey'],
                actionV: ['Run', 'Sleep', 'Poop'],
                living: ['Cow', 'Fish', 'Lizard'],
                c: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-"]
            };
          $scope.addButton = function () {
                $scope.results = [];
                var arr1 = wordSets[$scope.first];
                var arr2 = wordSets[$scope.second];
                for (var i = 0; i < arr1.length; i++) {
                    for (var j = 0; j < arr2.length; j++) {

$scope.results.push(arr1[i] + arr2[j] + $scope.domainExt);
                    
                    }
                } console.log($scope.results);
          };  
            $(".search").click(function () {
                $(".searchArea").animate({ "top": "-120px" }, "slow");
            });

            $(".search").click(function () {
                $(".someText").hide(0).delay(800).fadeIn();
            });
        },
        
        
    };
});
  