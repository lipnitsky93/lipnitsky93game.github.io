import {Part} from './classes/Part';
import {Frame} from './classes/Frame';
import {AnimationInfo} from './classes/AnimationInfo';

// *************************************** Create Hero attack animation *********************************************************************

const frameHeroAttack1 = new Frame();

frameHeroAttack1.parts.push(new Part('armHeroLeft', 203, 137, 0));
frameHeroAttack1.parts.push(new Part('weaponHeroLeft', 212, 88, 0));
frameHeroAttack1.parts.push(new Part('legHeroLeft', 190, 195, 0));
frameHeroAttack1.parts.push(new Part('bodyHero', 105, 115, 0));
frameHeroAttack1.parts.push(new Part('legHeroRight', 160, 195, 0));
frameHeroAttack1.parts.push(new Part('headHero', 115, 40, 0));
frameHeroAttack1.parts.push(new Part('armHeroRight', 125, 137, 0));
frameHeroAttack1.parts.push(new Part('weaponHeroRight', 140, 150, 0));

const frameHeroAttack2 = new Frame();

frameHeroAttack2.parts.push(new Part('armHeroLeft', 213, 127, -40));
frameHeroAttack2.parts.push(new Part('weaponHeroLeft', 200, 45, -40));
frameHeroAttack2.parts.push(new Part('legHeroLeft', 190, 195, 0));
frameHeroAttack2.parts.push(new Part('bodyHero', 105, 115, 0));
frameHeroAttack2.parts.push(new Part('legHeroRight', 160, 195, 0));
frameHeroAttack2.parts.push(new Part('headHero', 115, 40, -5));
frameHeroAttack2.parts.push(new Part('armHeroRight', 127, 135, -5));
frameHeroAttack2.parts.push(new Part('weaponHeroRight', 142, 148, -5));

const frameHeroAttack3 = new Frame();

frameHeroAttack3.parts.push(new Part('armHeroLeft', 218, 117, -80));
frameHeroAttack3.parts.push(new Part('weaponHeroLeft', 173, 25, -80));
frameHeroAttack3.parts.push(new Part('legHeroLeft', 190, 195, 0));
frameHeroAttack3.parts.push(new Part('bodyHero', 105, 115, 0));
frameHeroAttack3.parts.push(new Part('legHeroRight', 160, 195, 0));
frameHeroAttack3.parts.push(new Part('headHero', 115, 40, -5));
frameHeroAttack3.parts.push(new Part('armHeroRight', 125, 137, 0));
frameHeroAttack3.parts.push(new Part('weaponHeroRight', 140, 150, 0));

const frameHeroAttack4 = new Frame();

frameHeroAttack4.parts.push(new Part('armHeroLeft', 218, 127, -50));
frameHeroAttack4.parts.push(new Part('weaponHeroLeft', 250, 68, 20));
frameHeroAttack4.parts.push(new Part('legHeroLeft', 190, 195, 0));
frameHeroAttack4.parts.push(new Part('bodyHero', 105, 115, 3));
frameHeroAttack4.parts.push(new Part('legHeroRight', 160, 198, 10));
frameHeroAttack4.parts.push(new Part('headHero', 117, 42, 5));
frameHeroAttack4.parts.push(new Part('armHeroRight', 118, 137, 10));
frameHeroAttack4.parts.push(new Part('weaponHeroRight', 133, 153, 10));

const frameHeroAttack5 = new Frame();

frameHeroAttack5.parts.push(new Part('armHeroLeft', 203, 137, 0));
frameHeroAttack5.parts.push(new Part('weaponHeroLeft', 212, 88, 0));
frameHeroAttack5.parts.push(new Part('legHeroLeft', 190, 195, 0));
frameHeroAttack5.parts.push(new Part('bodyHero', 105, 115, 0));
frameHeroAttack5.parts.push(new Part('legHeroRight', 160, 195, 0));
frameHeroAttack5.parts.push(new Part('headHero', 115, 40, 0));
frameHeroAttack5.parts.push(new Part('armHeroRight', 125, 137, 0));
frameHeroAttack5.parts.push(new Part('weaponHeroRight', 140, 150, 0));

const animationHeroAttack = new AnimationInfo('attack');

animationHeroAttack.frames.push(frameHeroAttack1);
animationHeroAttack.frames.push(frameHeroAttack2);
animationHeroAttack.frames.push(frameHeroAttack3);
animationHeroAttack.frames.push(frameHeroAttack4);
animationHeroAttack.frames.push(frameHeroAttack5);

export {animationHeroAttack};

// ***************************************** Create Hero walk animation *********************************************************************

const frameHeroWalk1 = new Frame();

frameHeroWalk1.parts.push(new Part('armHeroLeft', 203, 137, 0));
frameHeroWalk1.parts.push(new Part('weaponHeroLeft', 212, 88, 0));
frameHeroWalk1.parts.push(new Part('legHeroLeft', 190, 195, 0));
frameHeroWalk1.parts.push(new Part('bodyHero', 105, 115, 0));
frameHeroWalk1.parts.push(new Part('legHeroRight', 160, 195, 0));
frameHeroWalk1.parts.push(new Part('headHero', 115, 40, 0));
frameHeroWalk1.parts.push(new Part('armHeroRight', 125, 137, 0));
frameHeroWalk1.parts.push(new Part('weaponHeroRight', 140, 150, 0));

const frameHeroWalk2 = new Frame();

frameHeroWalk2.parts.push(new Part('armHeroLeft', 220, 127, -60));
frameHeroWalk2.parts.push(new Part('weaponHeroLeft', 188, 35, -60));
frameHeroWalk2.parts.push(new Part('legHeroLeft', 190, 195, 0));
frameHeroWalk2.parts.push(new Part('bodyHero', 105, 110, 0));
frameHeroWalk2.parts.push(new Part('legHeroRight', 170, 200, -25));
frameHeroWalk2.parts.push(new Part('headHero', 115, 40, -5));
frameHeroWalk2.parts.push(new Part('armHeroRight', 115, 137, 20));
frameHeroWalk2.parts.push(new Part('weaponHeroRight', 115, 150, 10));

const frameHeroWalk3 = new Frame();

frameHeroWalk3.parts.push(new Part('armHeroLeft', 203, 137, 0));
frameHeroWalk3.parts.push(new Part('weaponHeroLeft', 212, 88, 0));
frameHeroWalk3.parts.push(new Part('legHeroLeft', 190, 195, 0));
frameHeroWalk3.parts.push(new Part('bodyHero', 105, 115, 0));
frameHeroWalk3.parts.push(new Part('legHeroRight', 160, 195, 0));
frameHeroWalk3.parts.push(new Part('headHero', 115, 40, 0));
frameHeroWalk3.parts.push(new Part('armHeroRight', 125, 137, 0));
frameHeroWalk3.parts.push(new Part('weaponHeroRight', 140, 150, 0));

const frameHeroWalk4 = new Frame();

frameHeroWalk4.parts.push(new Part('armHeroLeft', 195, 137, 20));
frameHeroWalk4.parts.push(new Part('weaponHeroLeft', 200,105, 20));
frameHeroWalk4.parts.push(new Part('legHeroLeft', 195, 188, -25));
frameHeroWalk4.parts.push(new Part('bodyHero', 105, 110, 0));
frameHeroWalk4.parts.push(new Part('legHeroRight', 160, 195, 0));
frameHeroWalk4.parts.push(new Part('headHero', 115, 40, -5));
frameHeroWalk4.parts.push(new Part('armHeroRight', 145, 135, -60));
frameHeroWalk4.parts.push(new Part('weaponHeroRight', 160, 140, -5));

const animationHeroWalk = new AnimationInfo('walk');

animationHeroWalk.frames.push(frameHeroWalk1);
animationHeroWalk.frames.push(frameHeroWalk2);
animationHeroWalk.frames.push(frameHeroWalk3);
animationHeroWalk.frames.push(frameHeroWalk4);

export {animationHeroWalk};

// ***************************************** Create Hero heal animation *********************************************************************

const frameHeroHeal1 = new Frame();

frameHeroHeal1.parts.push(new Part('armHeroLeft', 215, 147, 0));
frameHeroHeal1.parts.push(new Part('weaponHeroLeft', 220, 94, 0));
frameHeroHeal1.parts.push(new Part('legHeroLeft', 195, 195, -20));
frameHeroHeal1.parts.push(new Part('bodyHero', 110, 130, 0));
frameHeroHeal1.parts.push(new Part('legHeroRight', 170, 210, 80));
frameHeroHeal1.parts.push(new Part('headHero', 125, 55, 0));
frameHeroHeal1.parts.push(new Part('armHeroRight', 135, 145, 0));
frameHeroHeal1.parts.push(new Part('weaponHeroRight', 152, 158, 0));

const frameHeroHeal2 = new Frame();

frameHeroHeal2.parts.push(new Part('armHeroLeft', 215, 147, 0));
frameHeroHeal2.parts.push(new Part('weaponHeroLeft', 220, 94, 0));
frameHeroHeal2.parts.push(new Part('legHeroLeft', 195, 195, -20));
frameHeroHeal2.parts.push(new Part('bodyHero', 110, 130, 0));
frameHeroHeal2.parts.push(new Part('legHeroRight', 170, 210, 80));
frameHeroHeal2.parts.push(new Part('headHero', 122, 65, -30));
frameHeroHeal2.parts.push(new Part('armHeroRight', 135, 145, 0));
frameHeroHeal2.parts.push(new Part('weaponHeroRight', 152, 158, 0));

const frameHeroHeal3 = new Frame();

frameHeroHeal3.parts.push(new Part('armHeroLeft', 223, 113, -100));
frameHeroHeal3.parts.push(new Part('weaponHeroLeft', 220, 0, -20));
frameHeroHeal3.parts.push(new Part('legHeroLeft', 195, 195, -20));
frameHeroHeal3.parts.push(new Part('bodyHero', 110, 130, 0));
frameHeroHeal3.parts.push(new Part('legHeroRight', 170, 210, 80));
frameHeroHeal3.parts.push(new Part('headHero', 122, 65, -30));
frameHeroHeal3.parts.push(new Part('armHeroRight', 135, 145, 0));
frameHeroHeal3.parts.push(new Part('weaponHeroRight', 152, 158, 0));

const frameHeroHeal4 = new Frame();

frameHeroHeal4.parts.push(new Part('armHeroLeft', 223, 113, -100));
frameHeroHeal4.parts.push(new Part('weaponHeroLeft', 220, 0, -20));
frameHeroHeal4.parts.push(new Part('legHeroLeft', 195, 195, -20));
frameHeroHeal4.parts.push(new Part('bodyHero', 110, 130, 0));
frameHeroHeal4.parts.push(new Part('legHeroRight', 170, 210, 80));
frameHeroHeal4.parts.push(new Part('headHero', 122, 65, -30));
frameHeroHeal4.parts.push(new Part('armHeroRight', 135, 145, 0));
frameHeroHeal4.parts.push(new Part('weaponHeroRight', 152, 158, 0));

const frameHeroHeal5 = new Frame();

frameHeroHeal5.parts.push(new Part('armHeroLeft', 223, 113, -100));
frameHeroHeal5.parts.push(new Part('weaponHeroLeft', 220, 0, -20));
frameHeroHeal5.parts.push(new Part('legHeroLeft', 195, 195, -20));
frameHeroHeal5.parts.push(new Part('bodyHero', 110, 130, 0));
frameHeroHeal5.parts.push(new Part('legHeroRight', 170, 210, 80));
frameHeroHeal5.parts.push(new Part('headHero', 122, 65, -30));
frameHeroHeal5.parts.push(new Part('armHeroRight', 135, 145, 0));
frameHeroHeal5.parts.push(new Part('weaponHeroRight', 152, 158, 0));

const frameHeroHeal6 = new Frame();

frameHeroHeal6.parts.push(new Part('armHeroLeft', 203, 137, 0));
frameHeroHeal6.parts.push(new Part('weaponHeroLeft', 212, 88, 0));
frameHeroHeal6.parts.push(new Part('legHeroLeft', 190, 195, 0));
frameHeroHeal6.parts.push(new Part('bodyHero', 105, 115, 0));
frameHeroHeal6.parts.push(new Part('legHeroRight', 160, 195, 0));
frameHeroHeal6.parts.push(new Part('headHero', 115, 40, 0));
frameHeroHeal6.parts.push(new Part('armHeroRight', 125, 137, 0));
frameHeroHeal6.parts.push(new Part('weaponHeroRight', 140, 150, 0));

const animationHeroHeal = new AnimationInfo('walk');

animationHeroHeal.frames.push(frameHeroHeal1);
animationHeroHeal.frames.push(frameHeroHeal2);
animationHeroHeal.frames.push(frameHeroHeal3);
animationHeroHeal.frames.push(frameHeroHeal4);
animationHeroHeal.frames.push(frameHeroHeal5);
animationHeroHeal.frames.push(frameHeroHeal6);

export {animationHeroHeal};

// ****************************************** Create Hero die animation **************************************************************

const frameHeroDie1 = new Frame();

frameHeroDie1.parts.push(new Part('armHeroLeft', 203, 137, 0));
frameHeroDie1.parts.push(new Part('weaponHeroLeft', 212, 88, 0));
frameHeroDie1.parts.push(new Part('legHeroLeft', 180, 195, 20));
frameHeroDie1.parts.push(new Part('bodyHero', 105, 115, 0));
frameHeroDie1.parts.push(new Part('legHeroRight', 150, 195,20));
frameHeroDie1.parts.push(new Part('headHero', 125, 40, 20));
frameHeroDie1.parts.push(new Part('armHeroRight', 125, 137, 0));
frameHeroDie1.parts.push(new Part('weaponHeroRight', 140, 150, 0));

const frameHeroDie2 = new Frame();

frameHeroDie2.parts.push(new Part('armHeroLeft', 203, 137, 0));
frameHeroDie2.parts.push(new Part('weaponHeroLeft', 230, 130, 50));
frameHeroDie2.parts.push(new Part('legHeroLeft', 180, 195, 20));
frameHeroDie2.parts.push(new Part('bodyHero', 105, 115, 10));
frameHeroDie2.parts.push(new Part('legHeroRight', 150, 195,20));
frameHeroDie2.parts.push(new Part('headHero', 135, 50, 20));
frameHeroDie2.parts.push(new Part('armHeroRight', 125, 137, 0));
frameHeroDie2.parts.push(new Part('weaponHeroRight', 140, 170, 0));

const frameHeroDie3 = new Frame();

frameHeroDie3.parts.push(new Part('armHeroLeft', 203, 137, 0));
frameHeroDie3.parts.push(new Part('weaponHeroLeft', 140, 140, 210));
frameHeroDie3.parts.push(new Part('legHeroLeft', 180, 195, 20));
frameHeroDie3.parts.push(new Part('bodyHero', 105, 115, 10));
frameHeroDie3.parts.push(new Part('legHeroRight', 150, 195,20));
frameHeroDie3.parts.push(new Part('headHero', 145, 55, 40));
frameHeroDie3.parts.push(new Part('armHeroRight', 145, 137, -40));
frameHeroDie3.parts.push(new Part('weaponHeroRight', 100, 170, 0));

const frameHeroDie4 = new Frame();

frameHeroDie4.parts.push(new Part('armHeroLeft', 203, 137, 0));
frameHeroDie4.parts.push(new Part('weaponHeroLeft', 140, 140, 210));
frameHeroDie4.parts.push(new Part('legHeroLeft', 180, 195, 20));
frameHeroDie4.parts.push(new Part('bodyHero', 145, 115, 50));
frameHeroDie4.parts.push(new Part('legHeroRight', 160, 185,60));
frameHeroDie4.parts.push(new Part('headHero', 185, 85, 40));
frameHeroDie4.parts.push(new Part('armHeroRight', 185, 137, -40));
frameHeroDie4.parts.push(new Part('weaponHeroRight', 115, 170, 0));

const frameHeroDie5 = new Frame();

frameHeroDie5.parts.push(new Part('armHeroLeft', 203, 168, 0));
frameHeroDie5.parts.push(new Part('weaponHeroLeft', 140, 140, 210));
frameHeroDie5.parts.push(new Part('legHeroLeft', 180, 195, 20));
frameHeroDie5.parts.push(new Part('bodyHero', 165, 135, 80));
frameHeroDie5.parts.push(new Part('legHeroRight', 160, 200,60));
frameHeroDie5.parts.push(new Part('headHero', 210, 130, 60));
frameHeroDie5.parts.push(new Part('armHeroRight',210, 160, -40));
frameHeroDie5.parts.push(new Part('weaponHeroRight', 120, 170, 0));

const animationHeroDie = new AnimationInfo('heroDie');

animationHeroDie.frames.push(frameHeroDie1);
animationHeroDie.frames.push(frameHeroDie2);
animationHeroDie.frames.push(frameHeroDie3);
animationHeroDie.frames.push(frameHeroDie4);
animationHeroDie.frames.push(frameHeroDie5);

export {animationHeroDie};

// ****************************************** Create Enemy walk animation ************************************************************

const frameEnemyWalk1 = new Frame();

frameEnemyWalk1.parts.push(new Part('armLeftEnemy', 118, 95, 0));
frameEnemyWalk1.parts.push(new Part('weaponLeftEnemy', 25, 120, 0));
frameEnemyWalk1.parts.push(new Part('legLeftEnemy', 160, 187, 0));
frameEnemyWalk1.parts.push(new Part('legRightEnemy', 193, 187, 0));
frameEnemyWalk1.parts.push(new Part('bodyEnemy', 135, 62, 0));
frameEnemyWalk1.parts.push(new Part('headEnemy', 110, 10, 0));
frameEnemyWalk1.parts.push(new Part('armRightEnemy', 225, 87, 0));

const frameEnemyWalk2 = new Frame();

frameEnemyWalk2.parts.push(new Part('armLeftEnemy', 105, 85, -30));
frameEnemyWalk2.parts.push(new Part('weaponLeftEnemy', 12, 80, -30));
frameEnemyWalk2.parts.push(new Part('legLeftEnemy', 160, 187, 0));
frameEnemyWalk2.parts.push(new Part('legRightEnemy', 185, 187, -25));
frameEnemyWalk2.parts.push(new Part('bodyEnemy', 135, 60, 0));
frameEnemyWalk2.parts.push(new Part('headEnemy', 105, 10, 0));
frameEnemyWalk2.parts.push(new Part('armRightEnemy', 240, 80, 20));

const frameEnemyWalk3 = new Frame();

frameEnemyWalk3.parts.push(new Part('armLeftEnemy', 118, 95, 0));
frameEnemyWalk3.parts.push(new Part('weaponLeftEnemy', 25, 120, 0));
frameEnemyWalk3.parts.push(new Part('legLeftEnemy', 160, 187, 0));
frameEnemyWalk3.parts.push(new Part('legRightEnemy', 193, 187, 0));
frameEnemyWalk3.parts.push(new Part('bodyEnemy', 135, 62, 0));
frameEnemyWalk3.parts.push(new Part('headEnemy', 110, 10, 0));
frameEnemyWalk3.parts.push(new Part('armRightEnemy', 225, 87, 0));

const frameEnemyWalk4 = new Frame();

frameEnemyWalk4.parts.push(new Part('armLeftEnemy', 115, 95, 10));
frameEnemyWalk4.parts.push(new Part('weaponLeftEnemy', 27, 128, 10));
frameEnemyWalk4.parts.push(new Part('legLeftEnemy', 155, 187, -25));
frameEnemyWalk4.parts.push(new Part('legRightEnemy', 193, 187, 0));
frameEnemyWalk4.parts.push(new Part('bodyEnemy', 135, 60, 0));
frameEnemyWalk4.parts.push(new Part('headEnemy', 105, 10, 0));
frameEnemyWalk4.parts.push(new Part('armRightEnemy', 208, 87, -30));

const animationEnemyWalk = new AnimationInfo('walk');

animationEnemyWalk.frames.push(frameEnemyWalk1);
animationEnemyWalk.frames.push(frameEnemyWalk2);
animationEnemyWalk.frames.push(frameEnemyWalk3);
animationEnemyWalk.frames.push(frameEnemyWalk4);

export {animationEnemyWalk};

// ****************************************** Create Enemy attack animation ************************************************************

const frameEnemyAttack1 = new Frame();

frameEnemyAttack1.parts.push(new Part('armLeftEnemy', 118, 95, 0));
frameEnemyAttack1.parts.push(new Part('weaponLeftEnemy', 25, 120, 0));
frameEnemyAttack1.parts.push(new Part('legLeftEnemy', 160, 187, 0));
frameEnemyAttack1.parts.push(new Part('legRightEnemy', 193, 187, 0));
frameEnemyAttack1.parts.push(new Part('bodyEnemy', 135, 62, 0));
frameEnemyAttack1.parts.push(new Part('headEnemy', 110, 10, 0));
frameEnemyAttack1.parts.push(new Part('armRightEnemy', 225, 87, 0));

const frameEnemyAttack2 = new Frame();

frameEnemyAttack2.parts.push(new Part('armLeftEnemy', 100, 85, -40));
frameEnemyAttack2.parts.push(new Part('weaponLeftEnemy', 10, 70, -40));
frameEnemyAttack2.parts.push(new Part('legLeftEnemy', 160, 187, 0));
frameEnemyAttack2.parts.push(new Part('legRightEnemy', 193, 187, 0));
frameEnemyAttack2.parts.push(new Part('bodyEnemy', 135, 62, 0));
frameEnemyAttack2.parts.push(new Part('headEnemy', 110, 10, 0));
frameEnemyAttack2.parts.push(new Part('armRightEnemy', 220, 88, -10));

const frameEnemyAttack3 = new Frame();

frameEnemyAttack3.parts.push(new Part('armLeftEnemy', 90, 35, -120));
frameEnemyAttack3.parts.push(new Part('weaponLeftEnemy', 63, -10, -120));
frameEnemyAttack3.parts.push(new Part('legLeftEnemy', 160, 187, 0));
frameEnemyAttack3.parts.push(new Part('legRightEnemy', 193, 187, 0));
frameEnemyAttack3.parts.push(new Part('bodyEnemy', 135, 62, 0));
frameEnemyAttack3.parts.push(new Part('headEnemy', 115, 10, -10));
frameEnemyAttack3.parts.push(new Part('armRightEnemy', 220, 88, -10));

const frameEnemyAttack4 = new Frame();

frameEnemyAttack4.parts.push(new Part('armLeftEnemy', 65, 65, -80));
frameEnemyAttack4.parts.push(new Part('weaponLeftEnemy', -55, 43, -10));
frameEnemyAttack4.parts.push(new Part('legLeftEnemy', 160, 187, 0));
frameEnemyAttack4.parts.push(new Part('legRightEnemy', 193, 187, 10));
frameEnemyAttack4.parts.push(new Part('bodyEnemy', 135, 62, 0));
frameEnemyAttack4.parts.push(new Part('headEnemy', 110, 10, 0));
frameEnemyAttack4.parts.push(new Part('armRightEnemy', 240, 77, 20));

const frameEnemyAttack5 = new Frame();

frameEnemyAttack5.parts.push(new Part('armLeftEnemy', 118, 95, 0));
frameEnemyAttack5.parts.push(new Part('weaponLeftEnemy', 25, 120, 0));
frameEnemyAttack5.parts.push(new Part('legLeftEnemy', 160, 187, 0));
frameEnemyAttack5.parts.push(new Part('legRightEnemy', 193, 187, 0));
frameEnemyAttack5.parts.push(new Part('bodyEnemy', 135, 62, 0));
frameEnemyAttack5.parts.push(new Part('headEnemy', 110, 10, 0));
frameEnemyAttack5.parts.push(new Part('armRightEnemy', 225, 87, 0));

const animationEnemyAttack = new AnimationInfo('attack');

animationEnemyAttack.frames.push(frameEnemyAttack1);
animationEnemyAttack.frames.push(frameEnemyAttack2);
animationEnemyAttack.frames.push(frameEnemyAttack3);
animationEnemyAttack.frames.push(frameEnemyAttack4);
animationEnemyAttack.frames.push(frameEnemyAttack5);

export {animationEnemyAttack};

// ****************************************** Create Enemy die animation ************************************************************

const frameEnemyDie1 = new Frame();

frameEnemyDie1.parts.push(new Part('armLeftEnemy', 110, 55, -40));
frameEnemyDie1.parts.push(new Part('weaponLeftEnemy', 20, 40, -40));
frameEnemyDie1.parts.push(new Part('legLeftEnemy', 150, 175, -40));
frameEnemyDie1.parts.push(new Part('legRightEnemy', 193, 187, 0));
frameEnemyDie1.parts.push(new Part('bodyEnemy', 155, 62, -20));
frameEnemyDie1.parts.push(new Part('headEnemy', 155, -5, -30));
frameEnemyDie1.parts.push(new Part('armRightEnemy', 220, 95, -40));

const frameEnemyDie2 = new Frame();

frameEnemyDie2.parts.push(new Part('armLeftEnemy', 140, 75, -50));
frameEnemyDie2.parts.push(new Part('weaponLeftEnemy', 53, 52, -50));
frameEnemyDie2.parts.push(new Part('legLeftEnemy', 180, 185, -90));
frameEnemyDie2.parts.push(new Part('legRightEnemy', 193, 195, -80));
frameEnemyDie2.parts.push(new Part('bodyEnemy', 175, 82, -20));
frameEnemyDie2.parts.push(new Part('headEnemy', 180, 15, -30));
frameEnemyDie2.parts.push(new Part('armRightEnemy', 220, 110, -60));

const frameEnemyDie3 = new Frame();

frameEnemyDie3.parts.push(new Part('armLeftEnemy', 140, 75, -50));
frameEnemyDie3.parts.push(new Part('weaponLeftEnemy', 53, 52, -50));
frameEnemyDie3.parts.push(new Part('legLeftEnemy', 180, 185, -90));
frameEnemyDie3.parts.push(new Part('legRightEnemy', 193, 195, -80));
frameEnemyDie3.parts.push(new Part('bodyEnemy', 175, 82, -20));
frameEnemyDie3.parts.push(new Part('headEnemy', 185, 15, -45));
frameEnemyDie3.parts.push(new Part('armRightEnemy', 220, 110, -60));

const frameEnemyDie4 = new Frame();

frameEnemyDie4.parts.push(new Part('armLeftEnemy', 210, 45, -140));
frameEnemyDie4.parts.push(new Part('weaponLeftEnemy', 200, 8, -140));
frameEnemyDie4.parts.push(new Part('legLeftEnemy', 180, 185, -90));
frameEnemyDie4.parts.push(new Part('legRightEnemy', 193, 195, -80));
frameEnemyDie4.parts.push(new Part('bodyEnemy', 205, 117, -65));
frameEnemyDie4.parts.push(new Part('headEnemy', 275, 90, -75));
frameEnemyDie4.parts.push(new Part('armRightEnemy', 245, 125, -150));

const frameEnemyDie5 = new Frame();

frameEnemyDie5.parts.push(new Part('armLeftEnemy', 195, 95, -50));
frameEnemyDie5.parts.push(new Part('weaponLeftEnemy', 60, 115, 20));
frameEnemyDie5.parts.push(new Part('legLeftEnemy', 180, 185, -90));
frameEnemyDie5.parts.push(new Part('legRightEnemy', 193, 195, -80));
frameEnemyDie5.parts.push(new Part('bodyEnemy', 205, 117, -65));
frameEnemyDie5.parts.push(new Part('headEnemy', 275, 90, -75));
frameEnemyDie5.parts.push(new Part('armRightEnemy', 235, 170, -80));

const animationEnemyDie = new AnimationInfo('die');

animationEnemyDie.frames.push(frameEnemyDie1);
animationEnemyDie.frames.push(frameEnemyDie2);
animationEnemyDie.frames.push(frameEnemyDie3);
animationEnemyDie.frames.push(frameEnemyDie4);
animationEnemyDie.frames.push(frameEnemyDie5);

export {animationEnemyDie};