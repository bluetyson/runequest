angular.module('runequest-character.directives')
.directive('characterGenerator', [ 
'$log', 
'HumanCreation', 
function($log, HumanCreation) {
    return {
        restrict:'E',
        templateUrl:'directives/character-generator.html',
        replace:true,
        scope:{},
        controller:function($scope) {
            $scope.character = {}
            $scope.character.dirty = false
            $scope.character.uuid = null
            $scope.button = document.getElementById('saveButton')
            $scope.load = function() { alert('load') }
            $scope.save = function() { alert('save') }
            $scope.willLoad = function() {
                $scope.button.innerText = 'load'
                $scope.clickAction = $scope.load 
            }
            $scope.willSave = function() { 
                $scope.button.innerText = 'save'
                $scope.clickAction = $scope.save
                
                var c = HumanCreation.generate()

                $log.log('dirty = ', c.dirty)
                $scope.populateSheet(c)
            }
            $scope.clickAction = $scope.load
            $scope.populateSheet = function(data) {
                $scope.character = data
                if ($scope.save === $scope.clickAction) $scope.dirty = true
            }
        } // controller
    } // return
}])
