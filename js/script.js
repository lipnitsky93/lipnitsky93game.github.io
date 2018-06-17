import {animationHeroAttack} from './animations';
import {animationHeroWalk, animationHeroHeal} from './animations';
import {animationEnemyWalk} from './animations';
import {animationEnemyAttack, animationEnemyDie} from './animations';
import {Hero} from './classes/Hero';
import {Enemy} from './classes/Enemy';
import {MathematicTask} from './classes/MathematicTask';
import {DictionaryTask} from './classes/DictionaryTask';
import {CapitalsTask} from './classes/CapitalsTask';
import {ListeningTask} from './classes/ListeningTask';
import {FlagsTask} from './classes/FlagsTask';
import {SpriteHeroContainer} from './classes/SpriteHeroContainer';
import {SpriteEnemyContainer} from './classes/SpriteEnemyContainer';
import {res} from './resources';
import {headsHeroSrc, bodiesHeroSrs, armsHeroLeftSrc, armsHeroRightSrc, legHeroLeftSrc, legHeroRightSrc, weaponHeroLeftSrc, weaponHeroRightSrc, headsEnemySrc, bodiesEnemySrc, armsLeftEnemySrc, armsRightEnemySrc, legsLeftEnemySrc, legsRightEnemySrc, weaponsLeftEnemySrc} from './constants';
import {globalArrOfResults, arrFromStorage, showButtons, hideButtons, fillInitialGlobalArrOfResult, flagsSrc} from './constants';

function setGlobalResultInLocalStorage() {
    let serialgGlobalArrOfResults = JSON.stringify(globalArrOfResults);
    if (!localStorage.getItem('tableOfResultsWardraft')) {
        localStorage.setItem('tableOfResultsWardraft', serialgGlobalArrOfResults);
    }
}

setGlobalResultInLocalStorage();
fillInitialGlobalArrOfResult();

resources.load(headsHeroSrc.concat(bodiesHeroSrs).concat(armsHeroLeftSrc).concat(armsHeroRightSrc).concat(legHeroLeftSrc).concat(legHeroRightSrc).concat(weaponHeroLeftSrc).concat(weaponHeroRightSrc));
resources.load(headsEnemySrc.concat(bodiesEnemySrc).concat(armsLeftEnemySrc).concat(armsRightEnemySrc).concat(legsLeftEnemySrc).concat(legsRightEnemySrc).concat(weaponsLeftEnemySrc));
resources.load(flagsSrc);

const audio = new Audio('./audio/12 - the lich king.mp3');

audio.play();
audio.loop = true;
audio.volume = 0.1;

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

        audioStart.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);

        audioStart.volume = 0.1;
        audioStart.play();
        
        const audioSwordClashHero = new Audio('./audio/zapsplat_warfare_sword_swipe_slash_body_squelch_20830.mp3');
        const audioSwordClashEnemy = new Audio('./audio/Swords_Collide-Sound_Explorer-2015600826.mp3');
        const audioDie = new Audio('./audio/zapsplat_human_male_scream_pain_003_15721.mp3');
        const audioHeal = new Audio('./audio/zapsplat_magic_wand_spell_appear_twinkle_004_12542.mp3');
        const inputAnswer = document.body.querySelector('.task input');
        const taskWrapper = document.body.querySelector('.task-wrapper');
        const answerMessage = document.body.querySelector('.task p:last-child');
        const buttonAttack = document.body.querySelector('.attack');   
        const buttonHeal = document.body.querySelector('.heal');
        const buttonCheck = document.body.querySelector('.task input.butt-check');
        const hero = new Hero(formOfFirstName.value || 'anonymous');
        const enemy = new Enemy();
        const mathematicTask = new MathematicTask();
        const dictionaryTask = new DictionaryTask();
        const capitalsTask = new CapitalsTask();
        const listeningTask = new ListeningTask();
        const flagsTask = new FlagsTask();
        
        hideButtons();

        enemy.setName();
        enemy.setView();
        enemy.walk(8, 1500, 720);
        enemy.drawInfo();

        hero.setView(new SpriteHeroContainer(2, 2, 2, 2, 2, 2, 2, 2));
        hero.walk(8, -300, 480);
        hero.drawInfo();
            
        startArea.style.display = 'none';
        gameArea.style.display = 'block';
            
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

        function startEnemyActivity() {
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
            if (hero.health <= 0) {
                finishTheGame();
            }
        }

        function checkValue() { 
            const inputAnswer = document.body.querySelector('.task input');
            buttonCheck.style.display = 'none';
            if (hero.currentTask == 'mathematic') {
                if (+inputAnswer.value === mathematicTask.result) {
                    return true;
                } else {
                    answerMessage.innerHTML = `Wrong! Correctly: ${mathematicTask.result}`;
                    return false;
                }
            } else if (hero.currentTask == 'dictionary') {
                if (dictionaryTask.result.indexOf(inputAnswer.value.toLowerCase()) !== -1) {
                    return true;
                } else {
                    answerMessage.innerHTML = `Wrong! Correctly: ${dictionaryTask.result[0]}`;
                    return false;
                }
            } else if (hero.currentTask == 'capitals') {
                if (capitalsTask.capital == inputAnswer.value) {
                    return true;
                } else {
                    answerMessage.innerHTML = `Wrong! Correctly: ${capitalsTask.capital}`;
                    return false;
                }
            } else if (hero.currentTask == 'listening') {
                const taskWrap = document.body.querySelector('.task');
                const taskAudio = document.body.querySelector('.task audio');
                taskWrap.removeChild(taskAudio);

                if (inputAnswer.value.toLowerCase() == listeningTask.word) {
                    return true;
                } else {
                    answerMessage.innerHTML = `Wrong! Correctly: ${listeningTask.word}`;
                    return false;
                }
            } else if (hero.currentTask == 'flags') {
                const taskWrap = document.body.querySelector('.task');
                const taskImg = document.body.querySelector('.task img');
                taskWrap.removeChild(taskImg);
                if (inputAnswer.value == flagsTask.country) {
                    return true;
                } else {
                    answerMessage.innerHTML = `Wrong! Correctly: ${flagsTask.country}`;
                    return false;
                }       
            }
        }

        function heroAttack() {
            answerMessage.innerHTML = 'Correctly!';
            setTimeout(closeTaskWrapper, 1500);
            setTimeout(hero.attack.bind(hero), 1700);
            setTimeout(audioSwordClashHero.play.bind(audioSwordClashHero), 2300);
            setTimeout(hero.drawInfo.bind(hero), 1700);
            setTimeout(enemy.loseHealth.bind(enemy), 3300);
            setTimeout(startEnemyActivity, 3400);
        }

        function heroHeal() {
            answerMessage.innerHTML = 'Correctly!';
            setTimeout(closeTaskWrapper, 1500);
            setTimeout(hero.heal.bind(hero), 1700);
            setTimeout(audioHeal.play.bind(audioHeal), 1700);
            setTimeout(hero.drawInfo.bind(hero), 1700);
            setTimeout(hero.getHealth.bind(hero), 3300);
            setTimeout(startEnemyActivity, 3500);
        }

        function enemyAttack() {
            setTimeout(closeTaskWrapper, 1500);
            setTimeout(enemy.attack.bind(enemy), 1700);
            setTimeout(audioSwordClashEnemy.play.bind(audioSwordClashEnemy), 2300);
            setTimeout(enemy.drawInfo.bind(enemy), 1700);
            setTimeout(hero.loseHealth.bind(hero), 3300);
            setTimeout(checkHeroHealth, 3400); 
        }

        function enemyAttackAnimation() {
            setTimeout(enemy.attack.bind(enemy), 200);
            setTimeout(audioSwordClashEnemy.play.bind(audioSwordClashEnemy), 800);
            setTimeout(enemy.drawInfo.bind(enemy), 200);
            setTimeout(hero.loseHealth.bind(hero), 1400);
            setTimeout(checkHeroHealth, 1500);
        }

        function checkTask() {
            if (hero.activity == 'attack') {
                if (checkValue()) {
                    heroAttack();
                } else {
                    enemyAttack();
                }
            } else if (hero.activity == 'heal') {
                if (checkValue()) {
                    heroHeal();
                } else {
                    enemyAttack();
                }
            }
        }

        function startAttack() {
            hero.activity = 'attack';
            startTask();
        }

        function startHeal() {
            hero.activity = 'heal';
            startTask();
        }

        function setFocus() {
            inputAnswer.focus();
            inputAnswer.scrollIntoView();
        }

        /******************************************************* Mathematic task ************************************************************/  
        
        function startMathematicTask() {
            const taskIntro = document.body.querySelector('.task p:first-child');
            const condition = document.body.querySelector('.task p:nth-child(2)');
            hero.currentTask = 'mathematic';
            hideButtons();
            taskWrapper.style.display = 'block';
            mathematicTask.setValues();
            mathematicTask.setIntegerResult();
            taskIntro.innerHTML = 'Solve mathematic task:';
            condition.innerHTML = `${mathematicTask.a} ${mathematicTask.operator} ${mathematicTask.b} =`;
        }

        /******************************************************* Dictionary task ************************************************************/ 

        function startDictionaryTask() {
            const taskIntro = document.body.querySelector('.task p:first-child');
            const condition = document.body.querySelector('.task p:nth-child(2)');
            hero.currentTask = 'dictionary';
            hideButtons();
            taskWrapper.style.display = 'block';
            dictionaryTask.setValues();
            taskIntro.innerHTML = 'Translate into Russian:';
            condition.innerHTML = dictionaryTask.word;
        }

        //*******************************************************Capitals task *****************************************************************/

        function startCapitalsTask() {
            const taskIntro = document.body.querySelector('.task p:first-child');
            const condition = document.body.querySelector('.task p:nth-child(2)');
            hero.currentTask = 'capitals';
            hideButtons();
            taskWrapper.style.display = 'block';
            capitalsTask.setValues();
            taskIntro.innerHTML = 'Write the capital of country:';
            condition.innerHTML = capitalsTask.country;
        }

        //********************************************************* Listening task ***************************************************************/

        function startListeningTask() {
            const taskIntro = document.body.querySelector('.task p:first-child');
            const taskAudio = document.createElement('audio');
            const taskWrap = document.body.querySelector('.task');
            const condition = document.body.querySelector('.task p:nth-child(2)');
            taskWrap.insertBefore(taskAudio, inputAnswer);
            taskAudio.setAttribute('controls', 'controls');
            hero.currentTask = 'listening';
            taskWrapper.style.display = 'block';
            listeningTask.setValues();
            taskAudio.style.marginLeft = '250px';
            taskAudio.style.marginBottom = '40px';
            taskAudio.src = listeningTask.src;
            taskIntro.innerHTML = 'Listen';
            condition.innerHTML = '& Answer:';
            hideButtons();
        }   
        
        //******************************************************* Flags task *********************************************************************/

        function startFlagsTask() {
            flagsTask.setValues();
            const taskIntro = document.body.querySelector('.task p:first-child');
            const taskImg = flagsTask.img;
            const taskWrap = document.body.querySelector('.task');
            const condition = document.body.querySelector('.task p:nth-child(2)');
            taskWrap.insertBefore(taskImg, inputAnswer);
            hero.currentTask = 'flags';
            taskWrapper.style.display = 'block';
           
            taskImg.style.marginLeft = '330px';
            taskImg.style.marginBottom = '40px';
            taskIntro.innerHTML = 'Which country';
            condition.innerHTML = 'this flag:';
            hideButtons();
        }
 
        function startTask() {
            setTimeout(setFocus, 10);
            hero.currentTask = _.sample(['flags', 'listening', 'mathematic', 'dictionary', 'capitals']);
            if (hero.currentTask == 'mathematic') {
                startMathematicTask();
            } else if (hero.currentTask == 'dictionary') {
                startDictionaryTask();
            } else if (hero.currentTask == 'capitals') {
                startCapitalsTask();
            } else if (hero.currentTask == 'listening') {
                startListeningTask();
            } else if (hero.currentTask == 'flags') {
                startFlagsTask();
            } 
        }

        function keyboardCheck(event) {
            if(event.keyCode == 13) {
                checkTask();
            }
        }

        buttonAttack.addEventListener('click', startAttack);
        buttonHeal.addEventListener('click', startHeal);
        buttonCheck.addEventListener('click', checkTask);
        inputAnswer.addEventListener('keydown', keyboardCheck);

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

