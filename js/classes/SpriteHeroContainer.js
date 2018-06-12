import {armsHeroLeftSrc, weaponHeroLeftSrc, legHeroLeftSrc, bodiesHeroSrs, legHeroRightSrc, headsHeroSrc, armsHeroRightSrc, weaponHeroRightSrc} from '../constants';

class SpriteHeroContainer {
    constructor(armHeroLeft, weaponHeroLeft, legHeroLeft, legHeroRight, bodyHero, headHero, armHeroRight, weaponHeroRight) {
        this.armHeroLeft = resources.get(armsHeroLeftSrc[armHeroLeft]);
        this.weaponHeroLeft = resources.get(weaponHeroLeftSrc[weaponHeroLeft]);
        this.legHeroLeft = resources.get(legHeroLeftSrc[legHeroLeft]);
        this.bodyHero = resources.get(bodiesHeroSrs[bodyHero]);
        this.legHeroRight = resources.get(legHeroRightSrc[legHeroRight]);
        this.headHero = resources.get(headsHeroSrc[headHero]);
        this.armHeroRight = resources.get(armsHeroRightSrc[armHeroRight]);
        this.weaponHeroRight = resources.get(weaponHeroRightSrc[weaponHeroRight]);
    }
}

export {SpriteHeroContainer};