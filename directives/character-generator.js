angular.module('runequest-character.directives', [])
.directive('characterGenerator', [ function() {
    return {
        restrict:'E',
        templateUrl:'directives/character-generator.html',
        replace:true,
        scope:{},
        controller:function() {
            $scope.character = {}
            $scope.character.dirty = false
            $scope.character.uuid = null
            $scope.button = document.getElementById('saveButton')
            $scope.load = function() {}
            $scope.save = function() {}
            $scope.willLoad = function() { $scope.button.onclick = $scope.load }
            $scope.willSave = function() {
                $scope.button.innerText = 'save'
                $scope.button.onclick = $scope.save
            }
        } // controller
    } // return
}])
