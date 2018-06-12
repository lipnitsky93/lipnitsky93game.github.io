const canvas = document.getElementById("myCanvasHero");
const ctx = canvas.getContext("2d");
const canvas2 = document.getElementById("myCanvasEnemy");
const ctx2 = canvas2.getContext("2d");
const TO_RADIANS = Math.PI/180; 
const headsHeroSrc = ['testimages/hero/head/knight_head_1.png', 'testimages/hero/head/knight_head_2.png', 'testimages/hero/head/knight_head_3.png', 'testimages/hero/head/1_head.png'];
const bodiesHeroSrs = ['testimages/hero/body/knight_chest_1.png', 'testimages/hero/body/knight_chest_2.png', 'testimages/hero/body/knight_chest_3.png'];
const armsHeroLeftSrc = ['testimages/hero/armleft/knight_arm_left_1.png', 'testimages/hero/armleft/knight_arm_left_2.png', 'testimages/hero/armleft/knight_arm_left_3.png'];
const armsHeroRightSrc = ['testimages/hero/armright/knight_arm_right_1.png', 'testimages/hero/armright/knight_arm_right_2.png', 'testimages/hero/armright/knight_arm_right_3.png'];
const legHeroLeftSrc = ['testimages/hero/legleft/knight_leg_left_1.png', 'testimages/hero/legleft/knight_leg_left_2.png', 'testimages/hero/legleft/knight_leg_left_3.png'];
const legHeroRightSrc = ['testimages/hero/legright/knight_leg_right_1.png', 'testimages/hero/legright/knight_leg_right_2.png', 'testimages/hero/legright/knight_leg_right_3.png'];
const weaponHeroLeftSrc = ['testimages/hero/weaponleft/knight_weapon_left_1.png', 'testimages/hero/weaponleft/knight_weapon_left_2.png', 'testimages/hero/weaponleft/knight_weapon_left_3.png'];
const weaponHeroRightSrc = ['testimages/hero/weaponright/knight_weapon_right_1.png', 'testimages/hero/weaponright/knight_weapon_right_2.png', 'testimages/hero/weaponright/knight_weapon_right_3.png'];

const headsEnemySrc = ['testimages/enemy/head/orc_head_1.png', 'testimages/enemy/head/orc_head_2.png', 'testimages/enemy/head/orc_head_3.png', 'testimages/enemy/head/1_head_.png', 'testimages/enemy/head/2_head_.png', 'testimages/enemy/head/3_head_.png'];
const bodiesEnemySrc = ['testimages/enemy/body/orc_chest_1.png', 'testimages/enemy/body/orc_chest_2.png', 'testimages/enemy/body/orc_chest_3.png', 'testimages/enemy/body/1_body_.png', 'testimages/enemy/body/2_body_.png', 'testimages/enemy/body/3_body_.png'];
const armsLeftEnemySrc = ['testimages/enemy/armleft/orc_arm_left_1.png', 'testimages/enemy/armleft/orc_arm_left_2.png', 'testimages/enemy/armleft/orc_arm_left_3.png'];
const armsRightEnemySrc = ['testimages/enemy/armright/orc_arm_right_1.png', 'testimages/enemy/armright/orc_arm_right_2.png', 'testimages/enemy/armright/orc_arm_right_3.png'];
const legsLeftEnemySrc = ['testimages/enemy/legleft/orc_leg_left_1.png', 'testimages/enemy/legleft/orc_leg_left_2.png', 'testimages/enemy/legleft/orc_leg_left_3.png'];
const legsRightEnemySrc = ['testimages/enemy/legright/orc_leg_right_1.png', 'testimages/enemy/legright/orc_leg_right_2.png', 'testimages/enemy/legright/orc_leg_right_3.png'];
const weaponsLeftEnemySrc = ['testimages/enemy/weaponleft/orc_weapon_left_1.png', 'testimages/enemy/weaponleft/orc_weapon_left_2.png', 'testimages/enemy/weaponleft/orc_weapon_left_3.png', 'testimages/enemy/weaponleft/troll_weapon_left_1.png', 'testimages/enemy/weaponleft/troll_weapon_left_2.png', 'testimages/enemy/weaponleft/troll_weapon_left_3.png'];


const enemyNameAdv = ['terrible', 'angry', 'appaling', 'snotty', 'stupid', 'cowardly'];
const enemyNameRace = ['orc', 'ogr', 'monster', 'goblin', 'gremlin', 'golem'];
const enemyName = ['Jacob', 'Daniel', 'Christopher', 'Ryan', 'Justin', 'Luke', 'Kevin', 'Jack', 'Connor', 'Charles', 'Diego', 'Sebastian', 'Jeremy'];

const globalArrOfResults =[
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null]
  ];

const arrFromStorage = JSON.parse(localStorage.getItem('tableOfResultsWardraft'));

function fillGlobalArrOfResult() {
    for (let i = 0; i < globalArrOfResults.length; i++) {
        for (let j = 0; j < globalArrOfResults[i].length; j++) {
            globalArrOfResults[i][j] = arrFromStorage[i][j];
        } 
    }
}

function showButtons() {
    const arrOfButtons = document.body.querySelectorAll('.game-control input');
    _.forEach(arrOfButtons, 
        (item, i) => {
            arrOfButtons[i].style.display = 'inline';
        });
}

function hideButtons() {
    const arrOfButtons = document.body.querySelectorAll('.game-control input');
    _.forEach(arrOfButtons, 
        (item, i) => {
            arrOfButtons[i].style.display = 'none';
        });
}

export {canvas, ctx, canvas2, ctx2, TO_RADIANS};
export {headsHeroSrc, bodiesHeroSrs, armsHeroLeftSrc, armsHeroRightSrc, legHeroLeftSrc, legHeroRightSrc, weaponHeroLeftSrc, weaponHeroRightSrc, headsEnemySrc, bodiesEnemySrc, armsLeftEnemySrc, armsRightEnemySrc, legsLeftEnemySrc, legsRightEnemySrc, weaponsLeftEnemySrc};
export {enemyNameAdv, enemyNameRace, enemyName};
export {globalArrOfResults, arrFromStorage};
export {showButtons, hideButtons, fillGlobalArrOfResult};

