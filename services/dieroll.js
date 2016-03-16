angular.module('runequest-character.services')
.factory('DieRoll', [ function() {
    return {
        d:function(sides) {
            return [Math.floor(Math.random() * sides)]
        }
    } // return
}])
