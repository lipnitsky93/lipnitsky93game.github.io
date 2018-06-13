import {animationHeroAttack} from './animations';
import {animationHeroWalk} from './animations';
import {animationEnemyWalk} from './animations';
import {animationEnemyAttack, animationEnemyDie} from './animations';
import {Hero} from './classes/Hero';
import {Enemy} from './classes/Enemy';
import {MathematicTask} from './classes/MathematicTask';
import {SpriteHeroContainer} from './classes/SpriteHeroContainer';
import {SpriteEnemyContainer} from './classes/SpriteEnemyContainer';
import {res} from './resources';
import {headsHeroSrc, bodiesHeroSrs, armsHeroLeftSrc, armsHeroRightSrc, legHeroLeftSrc, legHeroRightSrc, weaponHeroLeftSrc, weaponHeroRightSrc, headsEnemySrc, bodiesEnemySrc, armsLeftEnemySrc, armsRightEnemySrc, legsLeftEnemySrc, legsRightEnemySrc, weaponsLeftEnemySrc} from './constants';
import {globalArrOfResults, arrFromStorage, showButtons, hideButtons, fillInitialGlobalArrOfResult} from './constants';

function setGlobalResultInLocalStorage() {
    let serialgGlobalArrOfResults = JSON.stringify(globalArrOfResults);
    console.log(localStorage.getItem('tableOfResultsWardraft'));
    if (!localStorage.getItem('tableOfResultsWardraft')) {
    localStorage.setItem('tableOfResultsWardraft', serialgGlobalArrOfResults);
    }
}

setGlobalResultInLocalStorage();
fillInitialGlobalArrOfResult();

resources.load(headsHeroSrc.concat(bodiesHeroSrs).concat(armsHeroLeftSrc).concat(armsHeroRightSrc).concat(legHeroLeftSrc).concat(legHeroRightSrc).concat(weaponHeroLeftSrc).concat(weaponHeroRightSrc));
resources.load(headsEnemySrc.concat(bodiesEnemySrc).concat(armsLeftEnemySrc).concat(armsRightEnemySrc).concat(legsLeftEnemySrc).concat(legsRightEnemySrc).concat(weaponsLeftEnemySrc));



var audio = new Audio('./audio/12 - the lich king.mp3');
console.log(audio);
audio.play();
audio.volume = 0.3;
console.dir(audio);
console.log(audio.controls);

resources.onReady(
() => {
    const startArea = document.body.querySelector('.start-area');
    const gameArea = document.body.querySelector('.game-area');
    const buttonStart = document.body.querySelector('.butt-start');
    const buttonRestart = document.body.querySelector('.butt-restart');
    const formOfFirstName = document.forms.userData.firstName;

    

    function startGame() {
        audio.pause();
        const audioStart = new Audio('./audio/Warcraft_Soundtrack_-_Forest_Ambush_OST_Warcraft_(DemoLat.com).mp3');
        audioStart.volume = 0.3;
        audioStart.play();
        const audioWalk = new Audio('./audio/shagi_po_graviyu.mp3');
        const audioSwordClashHero = new Audio('./audio/zapsplat_warfare_sword_swipe_slash_body_squelch_20830.mp3');
        const audioSwordClashEnemy = new Audio('./audio/Swords_Collide-Sound_Explorer-2015600826.mp3');
        const audioDie = new Audio('./audio/zapsplat_human_male_scream_pain_003_15721.mp3');




        const inputAnswer = document.body.querySelector('.mathematic input');
        const taskWrapper = document.body.querySelector('.task');
        const answerMessage = document.body.querySelector('.mathematic p:last-child');
        const buttonAttack = document.body.querySelector('.attack');   
        const buttonCheck = document.body.querySelector('.mathematic input.butt-check');
        const hero = new Hero(formOfFirstName.value || 'anonymous');
        const enemy = new Enemy();
        const task1 = new MathematicTask();

        

        hideButtons();

        enemy.setName();
        enemy.setView();
        //audioWalk.play();
         
        enemy.walk(12, 1500, 720);
        enemy.drawInfo();

        hero.setView(new SpriteHeroContainer(2, 2, 2, 2, 2, 2, 2, 2));
        hero.walk(12, -300, 480);
        hero.drawInfo();
            
        startArea.style.display = 'none';
        gameArea.style.display = 'block';
            
        /******************************************************* Mathematic task ************************************************************/  
        
        function startMathematicTask() {
            const condition = document.body.querySelector('.mathematic p:nth-child(2)');
            hideButtons();
            taskWrapper.style.display = 'block';
            task1.setValues()
            task1.setIntegerResult();
            console.log(task1);
            condition.innerHTML = `${task1.a} ${task1.operator} ${task1.b} =`;
        }

        function closeTaskWrapper() {
            taskWrapper.style.display = 'none';
            inputAnswer.value = '';
            answerMessage.innerHTML = '';
        }

        function createNewEnemy() {
            enemy.setName();
            enemy.setView();
            enemy.health = 100;
            enemy.currentCountFrame = 0;
            enemy.animation = animationEnemyWalk;
            enemy.walk(12, 1500, 700);
            enemy.drawInfo();
            buttonCheck.style.display = 'block';
        }

        function enemyAttackAnimation() {
            setTimeout(enemy.attack.bind(enemy), 200);
            setTimeout(audioSwordClashEnemy.play.bind(audioSwordClashEnemy), 800);
            setTimeout(enemy.drawInfo.bind(enemy), 200);
            setTimeout(hero.loseHealth.bind(hero), 1400);
            setTimeout(checkHeroHealth, 1500);
        }

        function checkEnemyHealth() {
            if (enemy.health > 0) {
                enemyAttackAnimation();
            } else {
                enemy.die();
                audioDie.play();
                enemy.drawInfo();
                setTimeout(createNewEnemy, 2000); 
            }
        }

        function checkHeroHealth() {
            if (hero.health > 0) {
                console.log('You are lucky man!');
            } else {
                finishTheGame();
            }
        }

        function checkValue() { 
            const inputAnswer = document.body.querySelector('.mathematic input');
            buttonCheck.style.display = 'none';
            if (+inputAnswer.value === task1.result) {
                answerMessage.innerHTML = 'Correctly!';
                setTimeout(closeTaskWrapper, 1500);
                setTimeout(hero.attack.bind(hero), 1700);
                setTimeout(audioSwordClashHero.play.bind(audioSwordClashHero), 2300);
                setTimeout(hero.drawInfo.bind(hero), 1700);
                setTimeout(enemy.loseHealth.bind(enemy), 3300);
                setTimeout(checkEnemyHealth, 3500);
            } else {
                answerMessage.innerHTML = 'Wrong!';
                setTimeout(closeTaskWrapper, 1500);
                setTimeout(enemy.attack.bind(enemy), 1700);
                setTimeout(audioSwordClashEnemy.play.bind(audioSwordClashEnemy), 2300);
                setTimeout(enemy.drawInfo.bind(enemy), 1700);
                setTimeout(hero.loseHealth.bind(hero), 3300);
                setTimeout(checkHeroHealth, 3400); 
            }
        }

        buttonAttack.addEventListener('click', startMathematicTask);
        buttonCheck.addEventListener('click', checkValue);

        //******************************* VICTORY AREA ****************************************************************/
        //***************************** Set table of results *********************************************************/

        const table = document.body.querySelector('tbody');

        class CurrentResult {
        constructor(name, killedMonsters) {
            this.name = name;
            this.killedMonsters = killedMonsters;
        }

        toFillEmptyArr() {
            globalArrOfResults[0][0] = this.name;
            globalArrOfResults[0][1] = this.killedMonsters;
        }

        toFillNotEmptyArr() {
            for (let i = 0; i < globalArrOfResults.length; i++) {
                if (globalArrOfResults[i][1] !== null) {
                    if (+(globalArrOfResults[i][1]) < enemy.countOfKilledMonsters) {
                        globalArrOfResults.splice(i, 0, [this.name, this.killedMonsters]);
                        globalArrOfResults.splice(10, 1);
                        return;
                        }
                    } else {
                        globalArrOfResults.splice(i, 0, [this.name, this.killedMonsters]);
                        globalArrOfResults.splice(10, 1);
                        return;
                        }
                }
            }
        }       

        const currentResult = new CurrentResult();

        function fillGlobalArrOfResult() {
            if (checkIfGlobalArrIsEmpty()) {
                currentResult.toFillEmptyArr();
            } else {
                currentResult.toFillNotEmptyArr();
                }
            }

        function checkIfGlobalArrIsEmpty() {
            return globalArrOfResults[0][1] == null;
        }

        function setCurrentResult() {
            currentResult.name = hero.name;
            currentResult.killedMonsters = enemy.countOfKilledMonsters;
        }

        function setGlobalResultInLocalStorage() {
            let serialgGlobalArrOfResults = JSON.stringify(globalArrOfResults);
            localStorage.setItem('tableOfResultsWardraft', serialgGlobalArrOfResults);
        }

        function setGlobalResultInTable() {
            for (let i = 1; i < 11; i++) {
                table.rows[i].children[1].innerHTML = globalArrOfResults[i - 1][0];
                table.rows[i].children[2].innerHTML = globalArrOfResults[i - 1][1];
            }
        }

        function removeStorage() {
            localStorage.removeItem('tableOfResultsWardraft');
        }

        function goToVictoryArea() {
            const victoryArea = document.body.querySelector('.victory-area');
            const gameArea = document.body.querySelector('.game-area');
            gameArea.style.display = 'none';
            victoryArea.style.display='block';
        }

        function fillVictoryAreaHeader() {
            const victoryAreaHeader = document.body.querySelector('.victory-area h2');
            victoryAreaHeader.innerHTML = `Congratulations ${hero.name}! You killed ${enemy.countOfKilledMonsters} monsters!`;
        }

        function finishTheGame() {
            setTimeout(goToVictoryArea, 500);
            setCurrentResult();
            fillGlobalArrOfResult();
            setGlobalResultInLocalStorage();
            setGlobalResultInTable();
            fillVictoryAreaHeader();
        }
        
    }

    buttonStart.addEventListener('click', startGame);
    
    function restartGame() {
        location.reload(true);        
    }
    
    buttonRestart.addEventListener('click', restartGame);

    
    
});

