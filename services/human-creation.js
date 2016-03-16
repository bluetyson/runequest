angular.module('runequest-character.services')
.factory('HumanCreation', [
'$log', 
'DieRoll', 
function($log, DieRoll) {
    return {
        generate:function() {
            $log.log(UUIDjs.create(4).toString())

            var c = {}

            c.characteristics = {}
            c.uuid = UUIDjs.create(4).toString()
            c.name = ''
            c.race = 'human'
            c.characteristics['str'] = undefined
            c.characteristics['con'] = undefined
            c.characteristics['siz'] = undefined
            c.characteristics['int'] = undefined
            c.characteristics['pow'] = undefined
            c.characteristics['dex'] = undefined
            c.characteristics['cha'] = undefined
            c.dirty = true

            for (var attr in c.characteristics) {
                var pool = [ DieRoll.d(6), DieRoll.d(6), DieRoll.d(6) ]

                c.characteristics[attr] = pool.reduce(function(a, b) { return a + b }, 0)
                $log.debug(pool, c.characteristics[attr])
            }
            $log.debug('generated', c)
            return c
        }
    } // return
}])
