angular.module('runequest-character.directives')
.directive('basicStatistics', [ 
'$log',
'$rootScope',
'HumanCreation', 
function($log, $rootScope, HumanCreation) {
    return {
        restrict:'E',
        templateUrl:'directives/basic-stats.html',
        replace:true,
        scope:{ character:'=' },
        controller:function($scope) {
            $log.debug('character', $scope.character)
            $scope.update = function($event) {
                var characteristics = $scope.character.characteristics
                var modified = $event.target.id
                var newValue = $event.target.value
                var oldValue = $event.target.defaultValue

                if ('race' === modified)
                    $scope.character.race = newValue
                else
                    characteristics[modified] = newValue 
                if (!$event.target.validity.valid) {
                    $log.debug('old value', oldValue)
                    document.getElementById(modified).value = oldValue
                    characteristics[modified] = oldValue
                }
                $log.debug('character', $scope.character, $event)
            } // update
            $scope.chooseGenerator = function($event) {
                $log.debug('selected race', $event.target.value)
            }
        } // controller
    } // return
}])
