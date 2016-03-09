angular.module('runequest-character.directives', [])
.directive('basicStatistics', [ function() {
    return {
        restrict:'E',
        templateUrl:'basic-stats.html',
        replace:true,
        scope:{},
        controller:function() {
        } // controller
    } // return
}])
