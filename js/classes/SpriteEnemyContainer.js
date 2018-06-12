import {armsLeftEnemySrc, weaponsLeftEnemySrc, legsLeftEnemySrc, bodiesEnemySrc, legsRightEnemySrc, headsEnemySrc, armsRightEnemySrc} from '../constants';
import {canvas, ctx, canvas2, ctx2, TO_RADIANS} from '../constants';

class SpriteEnemyContainer {
    constructor() {
        this.armLeftEnemy = resources.get(armsLeftEnemySrc[_.random(armsLeftEnemySrc.length - 1)]);
        this.weaponLeftEnemy = resources.get(weaponsLeftEnemySrc[_.random(weaponsLeftEnemySrc.length - 1)]);
        this.legLeftEnemy = resources.get(legsLeftEnemySrc[_.random(legsLeftEnemySrc.length - 1)]);
        this.bodyEnemy = resources.get(bodiesEnemySrc[_.random(bodiesEnemySrc.length - 1)]);
        this.legRightEnemy = resources.get(legsRightEnemySrc[_.random(legsRightEnemySrc.length - 1)]);
        this.headEnemy = resources.get(headsEnemySrc[_.random(headsEnemySrc.length - 1)]);
        this.armRightEnemy = resources.get(armsRightEnemySrc[_.random(armsRightEnemySrc.length - 1)]);
    }
}

export {SpriteEnemyContainer};