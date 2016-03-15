angular.module('runequest-character.directives')
.directive('characterGenerator', [ function() {
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
            }
            $scope.clickAction = $scope.load
        } // controller
    } // return
}])
